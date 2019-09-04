pipeline {
    agent any

    stages {
      stage('Checkout Git') {
        steps{
          git 'https://github.com/vjlh/Mingeso.git'
        }
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

    stage('Unit Test'){
      steps {
        sh 'npm run unit'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm run serve'
      }
    }
}
