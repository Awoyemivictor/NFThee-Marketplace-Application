// global imports
const { StatusCodes } = require('../../config').constantCredentials;

exports.successResponse = async (req, res, data, message, status = StatusCodes.OK) => {
    return res.status(status).json({
        success: true,
        message,
        data,
    });
}

exports.errorResponse = (res, error, message, status = StatusCodes.INTERNAL_SERVER_ERROR) =>
    res.status(status).json({
        success: false,
        message,
        error,
    });

exports.errorResponseUnauth = (res, error, message, status = StatusCodes.UNAUTHORIZED) => {
    res.status(status).json({
        success: false,
        message,
        error,
    });
}

exports.errorResponseBadReq = (res, error, message, status = StatusCodes.BAD_REQUEST) => {
    res.status(status).json({
        success: false,
        message,
        error,
    });
}