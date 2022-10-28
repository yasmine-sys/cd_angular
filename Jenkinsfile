node ('worker') {
    
     stage('GIT Pull') {
        git branch: 'feature_stock',
        url : 'https://github.com/chamsBLT/ci_project-Angular.git',
        credentialsId: '57a472eb-ae16-4baf-b2c1-d23871f81228';
    }
  
    stage('Build docker image') {
        app = docker.build("dhib23/cicd_front_app_stock")
    }

    stage('Push image') {
        docker.withRegistry('', 'docker-credentials') {
            app.push("latest")
        }
    }
  
}
