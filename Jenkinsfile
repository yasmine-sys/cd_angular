node ('maître') {
    
     stage('GIT Pull') {
        echo 'Pulling...';
                  git branch: 'main',
                  url : 'https://github.com/yasmine-sys/cd_angular.git',
                  credentialsId: '57a472eb-ae16-4baf-b2c1-d23871f81228';
    }
  
  stage('Build PROJECT via ANSIBLE') {
     script {   
     sh 'ansible-playbook ansible/build.yml -i ansible/inventory/host.yml -vvv'
       
     }
   }  
  
  stage('Build Image via ANSIBLE') {
     script {   
     sh 'ansible-playbook ansible/docker.yml -i ansible/inventory/host.yml -vvv'
     }
   }  
  
   stage('Push image to DOCKERHUB via ANSIBLE') {
     script {   
     sh 'ansible-playbook ansible/docker-registry.yml -i ansible/inventory/host.yml -vvv'
     }
   } 
  
   stage('Orchestration via K8S-MINIKUBE') {
     script {   
     sh "minikube start --force --driver=docker"  
   //  sh """ alias kubectl="minikube kubectl --" """
     sh "minikube kubectl -- apply -f deployment.yml"
     sh "minikube kubectl -- apply -f service.yml"
     sh "minikube service cd-app-svc --url"
     }
   } 
  
      stage("Send EMAIL") {
      script {
          mail bcc: '', 
          body: "Build ${BUILD_DISPLAY_NAME} on ${JOB_NAME} was successful. You can visit the web page directly : ${params.url} ", cc: '', from: '', replyTo: '', subject: "${BUILD_NUMBER} was run successfully", to: 'yasmine.dhib@esprit.tn'
     }
   }
  
}
