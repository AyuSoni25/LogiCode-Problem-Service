const express = require('express')
const { problemController } = require('../../controllers')

const problemRouter = express.Router()

problemRouter.get('/ping', problemController.pingProblemController)
problemRouter.get('/:id', problemController.getProblem)
problemRouter.get('/', problemController.getProblems)
problemRouter.delete('/:id', problemController.deleteProblem)
problemRouter.put('/:id', problemController.updateProblem)
problemRouter.post('/', problemController.addProblem)

module.exports = problemRouter;