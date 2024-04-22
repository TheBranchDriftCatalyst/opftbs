{ pkgs ? import <nixpkgs> { }
, pkgsLinux ? import <nixpkgs> { system = "x86_64-linux"; }
}:

pkgs.dockerTools.buildImage {
  name = "hello-docker";
  config = {
    Cmd = [ "${pkgsLinux.hello}/bin/hello" ];
  };
}

# # default.nix

# { pkgs ? import <nixpkgs> {} }:

# with pkgs;

# let
#   # Define Spark version
#   spark_3_4 = spark.override { version = "3.4.0"; };

#   # Define PySpark package
#   pyspark_3_4 = python3Packages.pyspark_3_4;

#   # Define the environment with required packages
#   myEnv = python3.withPackages(ps: [ps.pandas ps.numpy spark_3_4 pyspark_3_4]);
# in
# myEnv
