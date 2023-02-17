const {blockchainService} = require("../services")
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.addBlockchain = async (req, res, next) => {
    try {
        const data = await blockchainService.addBlockchain(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.getBlockchain = async (req, res, next) => { 
    try {
        const data = await blockchainService.getBlockchain(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.editBlockchain = async (req, res, next) => { 
    try {
        const data = await blockchainService.editBlockchain(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.deleteBlockchain = async (req, res, next) => { 
    try {
        const data = await blockchainService.deleteBlockchain(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}