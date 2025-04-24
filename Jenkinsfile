pipeline{
    agent any

    tools {nodejs "node "}

    stages {
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave Node1'){
                    agent{
                        label "remote_node1"
                    }
                    steps{
                        git url: 'https://github.com/Muhammad-Rizal-Supriadi/Automation-TQA.git'
                    }
                }
            }
        }
    }
}