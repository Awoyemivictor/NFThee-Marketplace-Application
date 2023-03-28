const { searchService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;


// exports.createToggle = async (req, res, next) => { 
//     try {
//         const data = await searchService.createToggle(req);
//         if(!data.status) return errorResponseBadReq(res,data.data,data.message);
//         else return successResponse(req, res, data.data, data.message);
//     } catch (error) {
//         next(error);
//     }
// }
exports.addToggle = async (req, res, next) => { 
    try {
        const data = await searchService.addToggle(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.getToggle = async (req, res, next) => { 
    try {
        const data = await searchService.getToggle(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
