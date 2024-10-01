<!-- commend: -->
<!-- docker basic cheatsheet -->
<!-- https://aws.plainenglish.io/docker-basic-cheatsheet-011b8ccf78fc -->

## docker import commond

    systemctl status docker.service
    systemctl start docker.service
    systemctl stop docker.service

## docker ps all:

    docker ps --help

## docker image pull request:

    docker run node

## docker node vesion check:

    docker run -it node (it meaning interactive container instancec)

## docker build:

    docker build .

## build docker with tag name:

    docker build -t learn-docker:01 . (t means tag)

## all container show:

    docker ps -a

## running container show:

    docker ps

## docker run:

    docker run -p 3900:3900 imageId

    docker run gowtamkumar/learn-docker

## docker run background and create container and image

docker run -d -p 3900:4100 --name nodecontainer node
docker run -p 3900:3900 -d --name feedback-app --rm
feadback-server:latest

## docker container start:

    docker start containername

## docker container stop:

    docker stop containername

## docker container Delete:

    docker rm containername

## docker all image show:

    docker images

## docker all image delete:

    docker rmi imageId

## all local image delete:

    docker image prune -a

## attach and detach container:

## docker single image details show:

    docker image inspect imageId

## docker tag and name:

    docker build . -t learn_docker(name):21(tag)

## docker image push:

    docker push image_name;

## docker image pull:

    docker pull image_name;

## docker repository tag and name chnage/rename and prepare push docker hub:

    docker tag name:tag
       exam:  docker tag localrepository  docker hub repostory

    then rename korer por: docker push repositoryname:tagname(gowtamkumar/learn-docker:21)
    node: also you can same name build as like docker hub repository moto:

## docker build -t gowtamkumar/learn-docker:tagname

## docker unnecssery file remove

docker system prune -a

## pwd is route:

pwd

## check ip

ip a

## docker commands

    docker -version
    docker images
    docker ps
    docker ps -a
    docker run -d -p 3900:3900 image
    docker stop container_id
    docker rm container_id
    docker rmi image_id
    docker start cotnainer_id
    docker logs -f container_id
    docker logs -since=2h -f container_id
    docker exec -it container_id bash
    docker pull imagename
    docker volume ls

## docker compose commond

    docker-compose up
    docker-compose up -d
    docker-compose rm
    docker-compose down

## docker architecture

#### docker volumes

    docker volume --help
    docker volume create volume name

## development mode a enable

    need to:
    1. bind mount
    2. anonymous Volume
    3. named volume

## docker app to docker mongo connection (mongodb "localhost" replace "host.docker.internal")

    mongodb://localhost:27017/practice_mongodb
    replace to
    mongodb://host.docker.internal:27017/practice_mongodb

## connection database container and app container cross container communication

# docker run -d --rm --env-file ./.env -p 3900:3900 --name node-mongo-container appimage

# docker run -d --rm -e NODE_ENV="development" -e PORT="3900" -e JWT_SECRET="dfasd" -e JWT_EXPIRES="7d" -e COOKIE_EXPIRES=7 -p 3900:3900 --name node-mongo-container appimage

    docker container imspect containername then id address sate connection korle done
    mongodb://idAddress:27017/practice_mongodb

## local database show for mongodb;

    mongosh --port 27018
    show db:
        show dbs
    use db:
        use mydatabase
    show collection:
        show collections
    table data show:
        db.products.find()

## docker database show for posgresql

    docker exec -it db psql -U postgres (db meaingin container)
    

## deployment by docker

 run: docker compose -f compose.dev.yaml up --build
 down: docker compose -f compose.dev.yaml down --build

 ## Linux system administraction essentials
    
   this system This file stores essential information about system users: cat /etc/passwd
   ## etc path ar moddha user, group, password all existing thake

   note: group crate then role permission
    ## group crate
    commond: sudo groupadd test_group
    ## group see commend
    commond: cat /etc/group

