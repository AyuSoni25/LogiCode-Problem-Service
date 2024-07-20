const NotImplementedError = require('../errors/notImplemented.error');
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

function getProblem(req, res, next){
    try{
        throw new NotImplementedError('Get Problem')
    } catch(e) {
        next(e);
    }
}

function getProblems(req, res, next){
    try{
        throw new NotImplementedError('Get Problems')
    } catch(e) {
        next(e);
    }
}

function deleteProblem(req, res, next){
    try{
        throw new NotImplementedError('Delete Problem')
    } catch(e) {
        next(e);
    }
}

function updateProblem(req, res, next){
    try{
        throw new NotImplementedError('Update Problem')
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