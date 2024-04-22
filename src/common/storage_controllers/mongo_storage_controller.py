

class MongoStorageController:
    def __init__(self, mongo_client):
        self.mongo_client = mongo_client

    def get_all(self):
        return self.mongo_client.get_all()

    def get_by_id(self, id):
        return self.mongo_client.get_by_id(id)

    def get_by_name(self, name):
        return self.mongo_client.get_by_name(name)

    def create(self, data):
        return self.mongo_client.create(data)

    def update(self, id, data):
        return self.mongo_client.update(id, data)

    def delete(self, id):
        return self.mongo_client.delete(id)
