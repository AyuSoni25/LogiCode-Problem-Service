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
}

module.exports = ProblemService