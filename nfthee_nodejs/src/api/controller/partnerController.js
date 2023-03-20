const { partnerServices } = require('../services');
const { addPartner,getPartner,createPageToken } = partnerServices;
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;



exports.addPartner = async (req, res, next) => {
    try {
        const data = await addPartner(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



exports.getPartner = async (req, res, next) => { 
    try {
        const data = await getPartner(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



exports.createPageToken = async (req, res, next) => {
    try {
        const data = await createPageToken(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}