# Simple Node.js Project with Docker and Automated using CI/CD pipeline(Jenkins & Github Actions)

This project demonstrates a minimal Node.js API built with Express, and is containerized using Docker.

## Prerequisites 

- Docker installed on your machine.
  - Download from https://www.docker.com/get-started

Verify installation:

docker --version  
 

## Build Docker Image

1. In the project root, build the Docker image:
  docker build -t simple-nodejs-project:latest .
   

2. List images to confirm:
  docker images
  

## Run Container

1. Start a container from the image:
docker run -d \
  --name simple-nodejs-app \
  -p 3000:3000 \
  simple-nodejs-project:latest

2. Verify container is running:
docker ps
   

3. Test the API:
curl http://localhost or ipAddress-of-jenkins-server:3000/#greet
curl http://localhost or ipAddress-of-jenkins-server:3000/#about


## Jenkins Pipeline:
  Then written a pipeline code to automate the build and deploy of latest docker image into the DockerHub,
  And running the Docker Container from the Image.
  1. Checkout code
  2. Build Docker Image
  3. Login to Docker Hub
  4. Push Image to Docker Hub
  5. Stop and Remove any existing containers
  6. Run Docker Image as Container

 ## GitHub Actions
  When you push to `main`, the workflow will:

  1. Checkout code
  2. Setup Docker Buildx
  3. Login to Docker Hub
  4. Build & Push image as `latest`
