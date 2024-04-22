import pytest
from confluent_kafka import Producer, Consumer
# from kafka import KafkaAdminClient, NewTopic


@pytest.fixture
def kafka_config():
    return {
        "bootstrap.servers": "localhost:9092",
        "group.id": "new_test_group",
        "auto.offset.reset": "earliest",
        "debug": "cgrp,topic,fetch",
        "security.protocol": "SASL_PLAINTEXT",
        "sasl.username": "user0",
        "sasl.password": "panda",
        "sasl.mechanism": "PLAIN",
    }


@pytest.fixture
def topic():
    return "test_topic"


# @pytest.fixture(scope="module")
# def create_topic(topic):
#     pass
# admin_client = KafkaAdminClient(bootstrap_servers="localhost:9092")
# topic_list = [NewTopic(name=topic, num_partitions=1, replication_factor=1)]
# admin_client.create_topics(new_topics=topic_list, validate_only=False)
# yield
# admin_client.delete_topics(topics=[topic])
# admin_client.close()


def test_kafka(kafka_config, topic):
    print("Running test_kafka")
    producer = Producer(**kafka_config)
    consumer = Consumer(**kafka_config)
    consumer.subscribe([topic])

    message = "Hello, Kafka!"
    producer.produce(topic, message.encode("utf-8"))
    producer.flush()

    msg = consumer.poll(timeout=10)
    assert msg is not None
    assert not msg.error(), f"Kafka message error: {msg.error()}"  # Error handling
    assert msg.value().decode("utf-8") == message

    consumer.commit()
    consumer.close()
