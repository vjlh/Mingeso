pipeline{
  agent any
  stages{
    stage('Checkout-git'){
      steps{
        git 'https://github.com/vjlh/Mingeso'
      }
    }
    stage('Compile'){
      steps{
        sh 'npm run serve'
        }
    }
    stage('Build'){
      steps{
        sh 'npm run build'
      }
    }
    stage('Run'){
      steps{
        sh 'npm run test'
      }
    }
  }
}
