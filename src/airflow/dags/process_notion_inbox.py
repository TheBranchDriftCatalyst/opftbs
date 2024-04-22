from airflow import DAG
from airflow.providers.apache.spark.operators.spark_submit import SparkSubmitOperator
from datetime import datetime, timedelta

default_args = {
    "owner": "airflow",
    "depends_on_past": False,
    "start_date": datetime(2021, 1, 1),
    "email_on_failure": False,
    "email_on_retry": False,
    "retries": 1,
    "retry_delay": timedelta(minutes=5),
}

dag = DAG(
    "process_notion_inbox",
    default_args=default_args,
    description="Orchestrate Spark applications for processing Notion inbox items",
    schedule_interval=timedelta(0, 60 * 15),
    catchup=False,
)

sync_notion_inbox = SparkSubmitOperator(
    task_id="sync_notion_inbox",
    application="path/to/spark-apps/sync_notion_inbox/src/sync_notion_inbox.py",
    name="sync_notion_inbox",
    dag=dag,
)

download_audio = SparkSubmitOperator(
    task_id="download_audio",
    application="path/to/spark-apps/download_audio/src/download_audio.py",
    name="download_audio",
    dag=dag,
)

transcribe = SparkSubmitOperator(
    task_id="transcribe",
    application="path/to/spark-apps/transcribe/src/transcribe.py",
    name="transcribe",
    dag=dag,
)

create_embeddings = SparkSubmitOperator(
    task_id="create_embeddings",
    application="path/to/spark-apps/create_embeddings/src/create_embeddings.py",
    name="create_embeddings",
    dag=dag,
)

entity_extract = SparkSubmitOperator(
    task_id="entity_extract",
    application="path/to/spark-apps/entity_extract/src/entity_extract.py",
    name="entity_extract",
    dag=dag,
)

# Define the sequence of tasks
sync_notion_inbox >> download_audio >> transcribe >> create_embeddings >> entity_extract
