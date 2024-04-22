# Use the Nix image as a base. For now we are using it naivetly 
# and will need to make some changes to it, in order to fully
# reap the benifits of Nix. 
# (i.e., create nix.config, use dockerTools etc.)
FROM nixos/nix:latest

# TODO: set the spark credentials here and make them accessible 
# to the entry point

# Set the working directory
WORKDIR /opt/spark-apps

# Install Apache Spark and Python using Nix
RUN nix-env -iA nixpkgs.python3 nixpkgs.python3Packages.pyspark

# Copy the entrypoint script
COPY entrypoint.sh /opt/entrypoint.sh
RUN chmod +x /opt/entrypoint.sh

# Set the entrypoint script
ENTRYPOINT ["/opt/entry-point.sh"]
