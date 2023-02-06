const { partnerServices } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;


exports.getPartner = async (req, res, next) => { 
    try {
        const data = await partnerServices.getPartner(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.deletePartner = async (req, res, next) => { 
    try {
        const data = await partnerServices.deletePartner(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
