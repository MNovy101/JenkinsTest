pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Running') { steps { sh 'python3 Hello.py' } }
    }
}