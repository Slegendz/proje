pipeline {
    agent any

    environment {
        IMAGE_NAME = "nextjs-app"
    }
    
    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/Slegendz/proje.git'
            }
        }
    
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop nextjs-container || true'
                sh 'docker rm nextjs-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name nextjs-container $IMAGE_NAME'
            }
        }
    }
}