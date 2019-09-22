pipeline {
    agent any
    /*Comentario Test*/
    stages {
        stage('Checkout Git') {
          steps{
            git 'https://github.com/vjlh/Mingeso.git'
            echo 'Obteniendo repositorio ...'
          }
        }

      stage('Dependencies') {
        steps {
          sh 'npm install'
          echo 'npm install'
        }
      }

      stage('Build'){
        steps{
          sh 'npm run build'
          echo 'npm run build'
        }
      }

      stage('Test'){
        steps {
          sh 'npm run test'
          echo 'npm run test'
        }
      }

  }
}
