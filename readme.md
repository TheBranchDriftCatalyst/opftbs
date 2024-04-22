

## Status

### Todo

- Service Interlayers
    - [ ] convert docker compose files into skaffold and k8 manifests

## Local Service Port Cheatsheet

> In order to find the correct port mappings, look at the output of skaffold dev --port-forward 
> this will tell you what secrets are created

export POSTGRES_PASSWORD=$(kubectl get secret --namespace default postgresql -o jsonpath="{.data.postgres-password}" | base64 -d)

| service | port | GUI | ConStr |
| ---- | ---- | ----- | ---- | 
| minio | 9000 | [9001](http://127.0.0.1:9001/login) | |
|rabbitmq-headless|  | [15672](http://127.0.0.1:15672) | |
|rabbitmq| 5672 | [15673](http://127.0.0.1:15673) | amqp://127.0.0.1:5672/ |
|postgresql| 5432 | n/a | postgresql://127.0.0.1:5432/ |



pgdb 5432
mongodb 27017
minio 9000, (gui a@ 9001)
qdrant 6333
rabbitmq 5672 (gui @ 15672)
redis 6379

whisper-asr-webservice 9000

**monitoring**
flower (gui @ 5555)
redis-insight (gui @ 8001)
prometheus 9090
prom pushgateway 9091
grafana (gui @ 3000)

---
## Scratchpad

git submodule foreach --recursive '
  git add .                        # Add all files
  git commit -m "initial commit after refactor" # Commit with a message
  git push                         # Push changes
'
