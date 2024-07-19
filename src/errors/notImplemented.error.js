const BaseError = require('./base.error')
const { StatusCodes } = require('http-status-codes');

class NotImplementedError extends BaseError {
    constructor(methodName, details){
        super("Not Implemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} is not implemented.`, details);
    }
}

module.exports = NotImplementedError;