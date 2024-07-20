const { markdownSanitizer } = require('../utils');

class ProblemService {
    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){
        try{
            // 1. Sanitize the markdown for description
            problemData.description = markdownSanitizer(problemData.description);

            const problem =  await this.problemRepository.createProblem(problemData);
            return problem;
        } catch(e){
            console.log(e);
            throw e;
        }
    }

    async getAllProblems(){
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }

    async getProblem(id){
        try {
            const problem = await this.problemRepository.getProblem(id);
            return problem;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }
}

module.exports = ProblemService