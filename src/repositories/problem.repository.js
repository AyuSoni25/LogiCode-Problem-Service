const { Problem }  = require('../models')

class ProblemRepository {
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });
    
            return problem;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }
}

module.exports = ProblemRepository