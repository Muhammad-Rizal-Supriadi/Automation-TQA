pipeline{
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave Node1'){
                    agent{
                        label "remote_node1"
                    }
                    steps{
                        git url: 'https://github.com/Muhammad-Rizal-Supriadi/Automation-TQA.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
                stage('Slave Node2'){
                    agent{
                        label "remote_node2"
                    }
                    steps{
                        git url: 'https://github.com/Muhammad-Rizal-Supriadi/Automation-TQA.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run %Script%'
                    }
                }
            }
        }
    }
}