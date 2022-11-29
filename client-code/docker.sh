arg=$1
echo "BUILDING CLIENT-CODE DOCKER IMAGE [$arg]. . ."

if [ "$arg" = "dev" ];
    then 
        docker build -t test-web-client .
fi

if [ "$arg" = "local" ];
    then 
        docker build \
        -t wingsdevelopment/test-web-client \
        --build-arg BASE_URL=http://206.81.31.235:3000 \
        -f Dockerfile.prod .
fi

if [ "$arg" = "prod" ];
    then 
        docker build \
        -t wingsdevelopment/test-web-client \
        --build-arg BASE_URL=http://206.81.31.235:3000 \
        -f Dockerfile.prod .
fi
