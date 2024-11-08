const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res){
    return res.json({message: 'Problem Controller is up'});
}

async function addProblem(req, res, next){
    try{
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newProblem
        });
    } catch(e) {
        next(e);
    }
}

async function getProblem(req, res, next){
    try{
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: `Successfully fetched the problem with id: ${req.params.id}`,
            error: {},
            data: problem
        })
    } catch(e) {
        next(e);
    }
}

async function getProblems(req, res, next){
    try{
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: problems
        });
    } catch(e) {
        next(e);
    }
}

async function deleteProblem(req, res, next){
    try{
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: `Successfully deleted the problem with id: ${req.params.id}`,
            error: {},
            data: deletedProblem
        })
    } catch(e) {
        next(e);
    }
}

async function updateProblem(req, res, next){
    try{
        const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: `Successfully updated the problem with id: ${req.params.id}`,
            error: {},
            data: updatedProblem
        })
    } catch(e) {
        next(e);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}