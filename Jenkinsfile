node ('worker') {
    
     stage('GIT Pull') {
        echo 'Pulling...';
                  git branch: 'main',
                  url : 'https://github.com/yasmine-sys/cd_angular.git',
                  credentialsId: '57a472eb-ae16-4baf-b2c1-d23871f81228';
    }
  
   stage('Install && Build') {
     script {   
     sh 'ansible-playbook ansible/build.yml -i ansible/inventory/host.yml'
       
     }
   }  
  
  stage('Create Image && Build DOCKER') {
     script {   
     sh 'ansible-playbook ansible/docker.yml -i ansible/inventory/host.yml -vvv'
     }
   }  
  
   stage('Push image to DOCKERHUB') {
     script {   
     sh 'ansible-playbook ansible/docker-registry.yml -i ansible/inventory/host.yml -vvv'
     }
   } 
  
  stage('Docker Compose') {
     script {   
     sh 'ansible-playbook ansible/dockerCompose.yml -i ansible/inventory/host.yml -vvv'
     }
   } 
}
