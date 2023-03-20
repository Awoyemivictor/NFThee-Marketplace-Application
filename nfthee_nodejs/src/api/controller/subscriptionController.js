const { subscriptionService } = require('../services')
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.insertSubsription= async (req, res, next) => {
  try {
    const data = await subscriptionService.insertSubsription(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

// exports.removeLikes= async (req, res, next) => {
//   try {
//     const data = await likesServices.removeLikes(req);

//     return successResponse(req, res, data.data, data.message);
//   } catch (error) {
//     next(error);
//   }
// };
// exports.getLikes= async (req, res, next) => {
//   try {
//     const data = await likesServices.getLikes(req);

//     return successResponse(req, res, data.data, data.message);
//   } catch (error) {
//     next(error);
//   }
// };