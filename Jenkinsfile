pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                echo "Building"
            }
        }
        stage('Testing'){
            bat "npm i"
            bat "npm run test"
        }
        stage('Deploy'){
            steps{
                echo "Deploy"
            }
        }
    }
}
