from pyspark.sql import SparkSession
import requests


def fetch_notion_inbox_data():
    # Replace these variables with your Notion API credentials and database ID
    notion_token = "your_notion_token"
    database_id = "your_database_id"
    headers = {
        "Authorization": f"Bearer {notion_token}",
        "Notion-Version": "2021-05-13",
    }
    url = f"https://api.notion.com/v1/databases/{database_id}/query"
    response = requests.post(url, headers=headers)
    data = response.json()
    # Extract relevant data from the response
    # This will depend on the structure of your Notion database
    inbox_data = []
    for item in data.get("results", []):
        # Extract data from each item in the response
        # For example, you might extract the page title and created time
        page_title = (
            item.get("properties", {})
            .get("Name", {})
            .get("title", [{}])[0]
            .get("text", {})
            .get("content", "")
        )
        created_time = item.get("created_time")
        inbox_data.append({"title": page_title, "created_time": created_time})
    return inbox_data


def main():
    spark = SparkSession.builder.appName("SyncNotionInbox").getOrCreate()

    # Fetch data from the Notion inbox
    inbox_data = fetch_notion_inbox_data()

    # Convert the data to a Spark DataFrame
    df = spark.createDataFrame(inbox_data)

    # Write the DataFrame to a storage system (e.g., HDFS, S3) for further processing
    df.write.mode("overwrite").parquet("path/to/output/sync_notion_inbox.parquet")

    spark.stop()


if __name__ == "__main__":
    main()
