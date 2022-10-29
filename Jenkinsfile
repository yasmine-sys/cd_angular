pipeline {
  agent any
  
  stages {
        stage('Pull GIT') {
            steps {
                 echo 'Pulling...';
                  git branch: 'main',
                  url : 'https://github.com/yasmine-sys/cd_angular.git',
                  credentialsId: '57a472eb-ae16-4baf-b2c1-d23871f81228';
            }
        }
     stage('Build') {
       steps {
     script {
     sh 'ansible-playbook ansible/build.yml -i ansible/inventory/host.yml'
     }
   }   
}
  }
}
