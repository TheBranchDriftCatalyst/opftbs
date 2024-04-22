# Dockerfile

FROM nixos/nix:latest

# Copy Nix expressions
COPY default.nix /root/default.nix

# Set working directory
WORKDIR /app

# Copy the Hadoop application files
COPY app/hadoop.py /app.py

# Install dependencies and build environment
RUN nix-env -iA nixpkgs.python3
RUN nix-env -f /root/default.nix

# Command to run the Hadoop application
CMD ["python3", "app.py"]
