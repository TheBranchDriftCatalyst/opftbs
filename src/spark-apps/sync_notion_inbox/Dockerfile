# Use the common Spark base image
FROM truenas.localdomain:5000/common-spark-base:latest

# Copy the application source code
COPY src/sync_notion_inbox.py /opt/spark-apps/

# Install any additional dependencies specific to this application
RUN pip install requests

# Set the command to run the Spark application
CMD ["/opt/spark/bin/spark-submit", "sync_notion_inbox.py"]
