build-dev:
	docker build -t test-web-client .
	
build-local:
	docker build \
	-t wingsdevelopment/test-web-client \
	--build-arg BASE_URL=http://206.81.31.235:3005 \
	-f Dockerfile.prod .

build-prod:
	docker build \
	-t wingsdevelopment/test-web-client \
	-f Dockerfile.prod .