pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm i --force'
      }
    }

    stage('Build Produccion') {
      when {
        branch 'main'
      }
      steps {
        sh 'ng build -c production'
      }
    }

    stage('Build Preproduccion') {
      when {
        branch 'pre-produccion'
      }
      steps {
        sh 'ng build -c preproduction'
      }
    }
  }
}
