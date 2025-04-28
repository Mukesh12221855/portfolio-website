pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Mukesh12221855/portfolio-website'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test (Optional)') {
            steps {
                echo 'No tests configured yet.'
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo 'Deploy step can be configured here.'
            }
        }
    }
}
