// global imports
const { StatusCodes } = require('../../config').constantCredentials;
const { ValidationError } = require('express-validation');

// local imports
const { errorResponse } = require('../helpers').ResponseHelper;

exports.routeNotFound = (req, res, next) => {
    const err = new Error();
    err.statusCode = StatusCodes.NOT_FOUND;
    err.message = 'Route Not Found';
    next(err);
};

exports.globalErrors = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        const errorMsgs = [];
        const errorDetails = err.details;
        if (errorDetails) {
            const errorBody =
                errorDetails.body || errorDetails.query || errorDetails.params;
            errorBody.forEach((el) => {
                errorMsgs.push({ message: el.message });
            });
            return errorResponse(
                res,
                errorMsgs[0],
                'Request Validation Error',
                err.statusCode
            );
        }
    }
    console.log(err);
    return errorResponse(res, err, err.message, err.statusCode);
};