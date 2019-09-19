pipeline {
    agent any
    tools {nodejs "nodeTS"}
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
          sh 'npm run test'
        }
      }

  }
}
