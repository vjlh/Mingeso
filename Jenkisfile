pipeline{
  agent any
  stages{
    stage('Checkout-git'){
      steps{
        git 'https://github.com/vjlh/Mingeso'
      }
    }
    stage('Install dependencies'){
      steps{
        sh 'npm install'
        }
    }
    stage('Build'){
      steps{
        sh 'npm run build'
      }
    }
    stage('Test'){
      steps{
        sh 'npm test'
      }
    }
  }
}
