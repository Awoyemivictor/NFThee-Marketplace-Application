const { blockchainService } = require('../services');
const { successResponse, errorResponseBadReq } =
  require('../helpers').ResponseHelper;

exports.getBlockchain = async (req, res, next) => {
  try {
    const data = await blockchainService.getBlockchain(req);
    if (!data.status) return errorResponseBadReq(res, data.data, data.message);
    else return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.setBlockchain = async (req, res, next) => {
  try {
    const data = await blockchainService.setBlockchain(req);
    if (!data.status) return errorResponseBadReq(res, data.data, data.message);
    else return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error)
  }
};

