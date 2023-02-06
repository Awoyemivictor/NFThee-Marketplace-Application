// global imports
const { StatusCodes } = require('../../config').constantCredentials;

exports.successResponse = async (req, res, data, message, status = StatusCodes.OK) => {
    return res.status(status).json({
        success: true,
        message,
        data,
    });
}

exports.successErrorResponse = async (req, res, data, message, status = StatusCodes.OK) => {
    return res.status(500).json({
        success: false,
        message,
        data,
    });
}

exports.errorResponse = (res, data, message, status = StatusCodes.INTERNAL_SERVER_ERROR) =>
    res.status(status).json({
        success: false,
        message,
        data,
    });

exports.errorResponseUnauth = (res, data, message, status = StatusCodes.UNAUTHORIZED) => {
    res.status(status).json({
        success: false,
        message,
        data,
    });
}

exports.errorResponseBadReq = (res, data, message, status = StatusCodes.BAD_REQUEST) => {
    res.status(status).json({
        success: false,
        message,
        data,
    });
}