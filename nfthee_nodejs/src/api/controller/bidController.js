const { bidServices } = require('../services');
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.createBidNft = async (req, res, next) => {
  try {
    const data = await bidServices.createBidNft(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.updateBidNft = async (req, res, next) => {
  try {
    const data = await bidServices.updateBidNft(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.fetchBidNft = async (req, res, next) => {
  try {
    const data = await bidServices.fetchBidNft(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.acceptBidNft = async (req, res, next) => {
  try {
    const data = await bidServices.acceptBidNft(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.fetchBids = async (req,res,next) => {
  try {
    const data = await bidServices.fetchBids(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.userBids = async (req,res,next) => {
  try {
    const data = await bidServices.userBids(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.fetchOffer = async (req,res,next) => {
  try {
    const data = await bidServices.fetchOffer(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};