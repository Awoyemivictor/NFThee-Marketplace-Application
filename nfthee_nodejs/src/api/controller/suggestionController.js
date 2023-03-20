const { suggestionService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.submitSuggestion = async (req, res, next) => {
    try {
        const data = await suggestionService.submitSuggestion(req);
        console.log(':::::::::::D:d:D:'.data)
        console.log('...req.res.data',req,res,data)
        return successResponse(req, res, data.data, data.message);
    } catch (error) { 
        next(error);
    }
}