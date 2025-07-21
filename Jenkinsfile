pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Running') { steps { sh 'python3 Hello.py' } }
        stage('Test') { steps { sh 'coverage run -m pytest && coverage report --fail-under=80' } }
        stage('Code Testing using SonarQube') { steps { sh 'sonar-scanner'} }
        stage('Approve') { steps { input 'Proceed to Deploy?' } }
    }
}