const { likesServices } = require('../services')
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.insertLikes= async (req, res, next) => {
  try {
    const data = await likesServices.insertLikes(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};