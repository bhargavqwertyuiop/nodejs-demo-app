pipeline {
    agent any

    environment {
        IMAGE_NAME = 'nodejs-demo-app'
        IMAGE_TAG = '1.0.0'
        CONTAINER_NAME = 'simple-nodejs-app'
        DOCKER_USER = 'bhargavqwertyuiop'
        DOCKER_REGISTRY = 'bhargavqwertyuiop/nodejs-demo-app' // Optional: set if pushing to Docker Hub or ACR
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/bhargavqwertyuiop/nodejs-demo-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'sudo docker build -t $IMAGE_NAME:$IMAGE_TAG .'
                }
            }
        }
      stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            sh '''
                echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                sudo docker tag $IMAGE_NAME:$IMAGE_TAG $DOCKER_USER/$IMAGE_NAME:$IMAGE_TAG
                sudo docker push $DOCKER_USER/$IMAGE_NAME:$IMAGE_TAG
            '''
          }
      }
    }


        stage('Stop & Remove Existing Container') {
            steps {
                script {
                    sh '''
                        sudo docker stop $CONTAINER_NAME || true
                        sudo docker rm $CONTAINER_NAME || true
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'sudo docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME:$IMAGE_TAG'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
