pipeline {
    agent any

    environment {
        VENV_PATH = '/opt/venv'
        COVERAGE = '/opt/venv/bin/coverage'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Script') {
            steps {
                sh 'python3 Hello.py'
            }
        }

        stage('Test with Coverage') {
            steps {
                sh '''
                    ${COVERAGE} run -m pytest
                    ${COVERAGE} report --fail-under=80
                '''
            }
        }

        stage('Generate HTML Report') {
            steps {
                sh '''
                    ${COVERAGE} html
                    echo "HTML report available in htmlcov/index.html"
                '''
            }
        }

        stage('Approve') {
            steps {
                input 'Proceed to Deploy?'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed. Check artifacts and logs above.'
        }
    }
}
