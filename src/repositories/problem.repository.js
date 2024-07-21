const logger = require('../config/logger.config');
const NotFoundError = require('../errors/notFound.error');
const NotImplementedError = require('../errors/notImplemented.error');
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

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFoundError("Problem", id)
            }
            return problem;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }

    async deleteProblem(id){
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if(!deletedProblem){
                logger.error(`Problem with id: ${id} not found in the db`)
                throw new NotFoundError("Problem", id)
            }
            return deletedProblem;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }

    async updateProblem(id, problemData){
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, problemData, { new: true });
            if(!updatedProblem){
                throw new NotFoundError("Problem", id)
            }
            return updatedProblem;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }
}

module.exports = ProblemRepository