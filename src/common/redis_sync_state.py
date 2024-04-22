from common.timer import Timer


def redis_state_sync(redis_client, watched_properties, discriminator=None, ttl=None):
    def decorator(target):
        if isinstance(target, type):  # If the target is a class
            return _decorate_class(target)
        if discriminator is None:
            raise ValueError("A discriminator is required for instance decoration.")
        return _decorate_instance(target)

    def _decorate_class(cls):
        @_bind_methods
        class WrappedClass(cls):
            original_class_name = cls.__name__  # Store the name of the original class

            def __init__(self, *args, **kwargs):
                self.__dict__["__synced_properties"] = watched_properties
                super().__init__(*args, **kwargs)
                for prop in watched_properties:
                    self._sync_property_from_redis(prop)

        return WrappedClass

    def _decorate_instance(instance):
        @_bind_methods
        class WrappedInstance(instance.__class__):
            original_class_name = (
                instance.__class__.__name__
            )  # Store the name of the instance's class

            def __init__(self, *args, **kwargs):
                self.__dict__["__synced_properties"] = watched_properties
                super().__init__(*args, **kwargs)
                for prop in watched_properties:
                    self._sync_property_from_redis(prop)

        wrapped_instance = WrappedInstance()
        wrapped_instance.__dict__.update(instance.__dict__)
        return wrapped_instance

    def _sync_property_from_redis(self, prop_name):
        redis_key = self._generate_redis_key()
        redis_value = redis_client.hget(redis_key, prop_name)
        if redis_value is not None:
            setattr(self, prop_name, redis_value)

    def _generate_redis_key(self):
        base_key = self.original_class_name  # Use the stored original class name
        if discriminator:
            base_key += f":{discriminator}"
        return base_key

    def _bind_methods(cls):
        cls._sync_property_from_redis = _sync_property_from_redis
        cls._generate_redis_key = _generate_redis_key
        cls.__getattribute__ = lambda self, name: _getattribute(self, name)
        cls.__setattr__ = lambda self, name, value: _setattr(self, name, value)
        return cls

    @Timer()
    def _getattribute(self, name):
        synced_properties = object.__getattribute__(self, "__dict__").get(
            "__synced_properties", []
        )
        if name in synced_properties:
            redis_key = self._generate_redis_key()
            redis_value = redis_client.hget(redis_key, name)
            if redis_value is not None:
                return redis_value
        return object.__getattribute__(self, name)

    def _setattr(self, name, value):
        synced_properties = object.__getattribute__(self, "__dict__").get(
            "__synced_properties", []
        )
        if name in synced_properties:
            redis_key = self._generate_redis_key()
            redis_client.hset(redis_key, name, value)
            if ttl is not None:
                redis_client.expire(redis_key, ttl)
        object.__setattr__(self, name, value)

    return decorator
