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
      stage('Deploy'){
          steps{
              sh 'sudo rm -rf /var/www/mingeso/html'
              sh 'sudo cp -r dist /var/www/mingeso/html'
              sh 'sudo rm -rf *'
              echo 'deployed'
          }
      }
      /*stage('Test'){
        steps {
          sh 'npm run test'
          echo 'npm run test'
        }
      }*/
  }
}
