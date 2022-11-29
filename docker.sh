
arg=$1

if [ "$arg" = "build-dev" ];
    then 
        cd ./client-code
        sh docker.sh dev
        cd ..
        cd ./mock-server-code
        sh docker.sh dev
fi

if [ "$arg" = "build-local" ];
    then 
        cd ./client-code
        sh docker.sh local
        cd ..
        cd ./mock-server-code
        sh docker.sh local
fi

if [ "$arg" = "build-prod" ];
    then 
        cd ./client-code
        sh docker.sh prod
        cd ..
        cd ./mock-server-code
        sh docker.sh prodk0
fi

if [ "$arg" = "run-dev" ];
    then 
        docker-compose -f docker-compose-dev.yaml up
fi

if [ "$arg" = "run-local" ];
    then 
        docker-compose -f docker-compose-prod.yaml up
fi

if [ "$arg" = "run-prod" ];
    then 
        docker-compose -f docker-compose-prod.yaml up
fi