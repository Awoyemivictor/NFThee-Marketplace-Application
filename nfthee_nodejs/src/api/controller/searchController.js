const { connectDB } = require('./../../db/dbConnection');

const { searchServices } = require('../services');
const { searchCollection,searchUser } = searchServices
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

/*
Users will be able to search for a particular creator, collectible, or collection by entering the keyword on the
platform.
*/

exports.searchResults = async (req, res, next) => {
  try {
    const db = await connectDB.db;
    // let collections = db.getCollectionNames();
    // console.log(collections);

    const data = await collections.forEach(function (collection) {
      db.getCollection(collection).find({ your_search_criteria });
    });
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.searchCollection = async (req, res, next) => {
  try {
   
    const data = await searchCollection(req)
    if (data.status == true) 
    {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
// exports.searchCollection = async (req, res, next) => {
//   try {
//     console.log("ddddddddddddddddddddddddddddd",searchCollection(req))
//     const data = await searchCollection(req)
//     // if (data.status == true) 
//     // console.log("::::::DDD",data)
//     // if (data.data.status==="verified")
//     if (data.status == true) 
    
//     {
//       return successResponse(req, res, data.data, data.message);
//     } else {
//       return successErrorResponse(req, res, data.data, data.message);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

exports.searchUser = async(req,res,next)=>{
  try {
    const data = await searchUser(req)
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
}
