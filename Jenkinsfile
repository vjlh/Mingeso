pipeline {
    agent any
    stages {
        stage('Checkout Git') {
          steps{
            git 'https://github.com/vjlh/Mingeso.git'
          }
        }

      stage('Dependencies') {
        steps {
          sh 'npm install'
        }
      }

      stage('Build'){
        steps{
          sh 'npm run build'
        }
      }

      stage('Test'){
        steps {
          sh 'npm test'
        }
      }

  }
}
