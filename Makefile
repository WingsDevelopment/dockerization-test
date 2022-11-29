build-dev: 
	cd client-code && $(MAKE) build-dev
	cd mock-server-code && $(MAKE) build

run-dev:
	docker-compose -f docker-compose-dev.yaml up

###
build-local: 
	cd client-code && $(MAKE) build-local
	cd mock-server-code && $(MAKE) build

run-local:
	docker-compose -f docker-compose-prod.yaml up

###
build-prod: 
	cd client-code && $(MAKE) build-prod
	cd mock-server-code && $(MAKE) build

run-prod:
	docker-compose -f docker-compose-prod.yaml up

SSH_STRING:=root@206.81.31.235

ssh:
	ssh -i ./ssh_key_2 $(SSH_STRING)

copy-files:
	scp -i ./ssh_key_2 -r ./* $(SSH_STRING):/root/