.PHONY: install_minikube_addons

start_minikube:
	@minikube start --memory=18432

install_minikube_addons: start_minikube
	@minikube addons enable metrics-server
	@minikube addons enable headlamp
	@kubectl create token headlamp --duration 24h -n headlamp
	@echo 'waiting for headlamp to start'
	@sleep 10
	
restart_k8:
	@minikube delete
	@minikube start --memory=18432
	install_minikube_addons