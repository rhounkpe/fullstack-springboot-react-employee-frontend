node {
    stage('Checkout SCM') {
        git branch: 'development', url: 'git@github.com:rhounkpe/fullstack-springboot-react-employee-frontend.git'
    }

    stage('Install node modules') {
        sh "npm run install"
    }

    stage('Build') {
        sh "npm run build:ssr"
    }

    stage('Deploy') {
        sh "pm2 restart all"
    }
}
