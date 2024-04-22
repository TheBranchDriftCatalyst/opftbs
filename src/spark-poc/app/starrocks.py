from pyspark.sql import SparkSession


def process(df):
    # Example processing logic
    # Assume we're adding a new column `processed_value` to the DataFrame
    return df.withColumn("processed_value", df["value"] * 2)


if __name__ == "__main__":
    # Create SparkSession
    spark = (
        SparkSession.builder.appName("Spark StarRocks Example")
        .config("spark.master", "local")
        .getOrCreate()
    )

    # Read data from StarRocks using JDBC
    jdbcDF = (
        spark.read.format("jdbc")
        .option("url", "jdbc:starrocks://starrocks_host:starrocks_port/my_database")
        .option("dbtable", "my_table")
        .option("user", "username")
        .option("password", "password")
        .load()
    )

    # Perform first processing step
    processedDF1 = process(jdbcDF)

    # Perform second processing step
    processedDF2 = process(processedDF1)

    # Write processed data back to StarRocks
    processedDF2.write.format("jdbc").option(
        "url", "jdbc:starrocks://starrocks_host:starrocks_port/my_database"
    ).option("dbtable", "processed_table").option("user", "username").option(
        "password", "password"
    ).mode(
        "overwrite"
    ).save()

    # Stop SparkSession
    spark.stop()
