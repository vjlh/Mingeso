pipeline{
  agent any
  tools {nodejs "node"}

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
    stage('Run'){
      steps{
        sh 'npm test'
      }
    }
  }
}
