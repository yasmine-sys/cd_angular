node ('worker') {
    
     stage('GIT Pull') {
        echo 'Pulling...';
                  git branch: 'main',
                  url : 'https://github.com/yasmine-sys/cd_angular.git',
                  credentialsId: '57a472eb-ae16-4baf-b2c1-d23871f81228';
    }
  
   stage('Build') {
     script {   
     sh 'ansible-playbook ansible/build.yml -i ansible/inventory/host.yml'
     }
   }  
  
  stage('docker') {
     script {   
     sh 'ansible-playbook ansible/docker.yml -i ansible/inventory/host.yml'
     }
   }  
}
