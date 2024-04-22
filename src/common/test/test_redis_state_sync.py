import pytest
import redis
from common.redis_sync_state import redis_state_sync


@pytest.fixture(scope="module")
def redis_client() -> redis.Redis:
    return redis.Redis(host="localhost", port=6381, db=0, password="panda", decode_responses=True)

@pytest.fixture(scope="module", autouse=True)
def after_test_hook(redis_client):
    # Setup code (if needed) goes here
    yield  # This yield statement separates setup from teardown
    # Teardown code goes here, runs after all tests in the module
    # redis_client.flushdb() # TODO need to allow this, seems it might be disabled command
    redis_client.delete("WrappedTestObject")


@pytest.fixture(scope="module")
def orig_object():
    class TestObject:
        def __init__(self, state="CLOSED"):
            self.state = state

        def interrogate(self, name):
            return getattr(self, name)
    return TestObject


@pytest.fixture(scope="module")
def test_object(redis_client, orig_object):
    @redis_state_sync(redis_client, ["state"])
    class WrappedTestObject(orig_object):
        pass

    return WrappedTestObject(state="PANDA")


@pytest.mark.integration
def test_interface_to_redis_sync_behavior(
    test_object, redis_client
):
    # Test 1: Interface to Redis
    redis_key = "WrappedTestObject"
    assert (
        redis_client.hget(redis_key, "state") == "PANDA"
    ), "Redis should reflect the updated state"
    # Change a value on the interface
    test_object.state = "OPEN"
    # Check redis for changed value
    assert (
        redis_client.hget(redis_key, 'state') == "OPEN"
    ), "Redis should reflect the updated state"


@pytest.fixture
def set_existing_redis_key(redis_client):
    # Pre-test task: Update Redis store
    redis_key = "WrappedTestObject"
    redis_client.hset(redis_key, "state", 'hotdog')


@pytest.mark.integration
def test_redis_to_interface_sync_behavior(set_existing_redis_key, test_object, redis_client):
    # Verify that test_object.state reflects the state set by set_existing_redis_key
    assert (
        test_object.state == "hotdog"
    ), "Component state should reflect the pretest Redis value"

    # Test 2: Redis to Interface
    redis_key = "WrappedTestObject"
    # Create a new instance to ensure isolation from previous test
    # Change value in redis
    redis_client.hset(redis_key, "state", "HALF-OPEN")
    # Check that value is updated in component
    assert (
        test_object.state == "HALF-OPEN"
    ), "Component state should reflect the updated Redis value"


if __name__ == "__main__":
    pytest.main()
