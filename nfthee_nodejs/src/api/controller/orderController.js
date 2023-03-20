const { orderServices } = require('../services');
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.createOrder = async (req, res, next) => {
  try {
    const data = await orderServices.createOrder(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const data = await orderServices.getOrder(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const data = await orderServices.updateOrder(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const data = await orderServices.deleteOrder(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.getOrdersByNftId = async (req, res, next) => {
  try {
    const data = await orderServices.getOrdersByNftId(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
