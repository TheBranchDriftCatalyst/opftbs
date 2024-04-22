{ pkgs ? import <nixpkgs> {} }:

let
  myApp = pkgs.dockerTools.buildLayeredImage {
    name = "my-nextjs-app";

    contents = [ pkgs.nodejs pkgs.yarn ./. ];

    config = {
      Cmd = [ "/bin/sh" "-c" ''
        groupadd -r app && useradd -r -g app app
        chown -R app:app /app
        if [ "$NODE_ENV" = "development" ]; then
          su -s /bin/sh -c 'yarn dev' app;
        else
          su -s /bin/sh -c 'yarn start' app;
        fi
      '' ];
      WorkingDir = "/app";
      ExposedPorts = {
        "3000/tcp" = {};
      };
    };
#    extraCommands = ''
#      cp -r ${./.} $out/app
#    '';
  };
in
myApp
spark
