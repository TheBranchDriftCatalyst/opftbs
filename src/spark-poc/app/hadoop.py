from pyspark import SparkContext
from pyspark.sql import SparkSession


def process(df):
    # Example processing logic
    # Assume we're adding a new column `processed_value` to the DataFrame
    return df.withColumn("processed_value", df["value"] * 2)


if __name__ == "__main__":
    # Create SparkSession
    spark = (
        SparkSession.builder.appName("Spark HDFS Example")
        .config("spark.master", "local")
        .getOrCreate()
    )

    # Get default SparkContext
    sc = spark.sparkContext

    # Read data from HDFS
    hdfs_path = "hdfs://namenode_host:namenode_port/path/to/hdfs/file"
    hdfsDF = spark.read.csv(hdfs_path)

    # Perform some processing
    processedDF = process(hdfsDF)

    # Write processed data back to HDFS
    processed_hdfs_path = (
        "hdfs://namenode_host:namenode_port/path/to/processed/hdfs/file"
    )
    processedDF.write.csv(processed_hdfs_path, mode="overwrite")

    # Stop SparkSession
    spark.stop()
