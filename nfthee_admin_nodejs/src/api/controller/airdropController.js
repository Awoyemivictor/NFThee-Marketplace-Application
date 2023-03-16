const { airdropService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;


exports.airdropSingleUser = async (req, res, next) => { 
    try {
        const data = await airdropService.airdropSingleUser(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.airdropNewUsers = async (req, res, next) => { 
    try {
        const data = await airdropService.airdropNewUsers(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



