const { StatusCodes } = require('http-status-codes');
const NotImplementedError = require('../errors/notImplemented.error');

function pingProblemController(req, res){
    return res.json({message: 'Problem Controller is up'});
}

function addProblem(req, res, next){
    try{
        throw new NotImplementedError('Add Problem')
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