const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');

const { nftIteams, signup, bidModel ,history} = require('../../models');

const { credentials } = require('../../config').constantCredentials;

exports.index = async (req) => {
  try {
    let str = req.query.str
      ? { name: { $regex: new RegExp(req.query.str, 'i') } }
      : {};
      // let user = req.query.user
      // ? { user_name: { $regex: new RegExp(req.query.user, 'i') } }
      // : {};
    let blockChain = req.query.blockChain
      ? {
          chooseBlockchain: {
            $regex: new RegExp(req.query.blockChain.split(',').join('|'), 'i'),
          },
        }
      : {};
    let collection = req.query.collection
      ? {
          chooseCollection: {
            $regex: new RegExp(req.query.collection.split(',').join('|'), 'i'),
          },
        }
      : {};
    let categories = req.query.categories
      ? {
          chooseCategory: {
            $regex: new RegExp(req.query.categories.split(',').join('|'), 'i'),
          },
        }
      : {};
//  let users=await signup.find({user_name:user})
    //search by category

    let result = await nftIteams
      .find({
        ...str,
        ...blockChain,
        ...collection,
        ...categories,
        status: 'verified',
      })
      .populate('currentOwner')
      .sort({ id: -1 });
// let result=
//   str&&collection&& blockChain &&categories?  await nftIteams
//       .find({
//         ...str,
//         ...blockChain,
//         ...collection,
//         ...categories,
//         status: 'verified',
//       })
//       .populate('currentOwner')
//       .sort({ id: -1 }) : await signup.find({user_name:user})
  //  let users=await signup.find({user_name:user})

    console.log(result);
    if (result) {
      return {
        message: 'All Create Item Data Fetch.....',
        status: true,
        data: result,
      };
    }
  } catch (error) {
    return error;
  }
};

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

exports.nftStore = async (req) => {
  try {
    console.info(req.body);
    // const uploadFile = req.file.location;

    let create_user = {
      userId: req.body.userId,
      tokenId: req.body.tokenId,
      chooseType: req.body.chooseType,
      uploadFile: req.body.uploadFile,
      name: req.body.name,
      designation: req.body.designation,
      about: req.body.about,
      chooseCollection: req.body.chooseCollection,
      chooseBlockchain: req.body.chooseBlockchain,
      putOnMarketplace: req.body.putOnMarketplace,
      unlockOncePurchased: req.body.unlockOncePurchased,
      attribute: req.body.attribute,
      levels: req.body.levels,
      stats: req.body.stats,
      currentOwner: req.body.currentOwner,
      currentOwner: req.body.currentOwner,
      explicitAndSensitiveContent: req.body.explicitAndSensitiveContent,
    };

    let result = await nftIteams.create(create_user);
    // let pop= await result.save()
    console.log(result);
    return {
      message: 'Create Item Data Save..........',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.getItemInfo = async (req, res) => {
  try {
    let result = await nftIteams.find({ status: 'verified' })

    return {
      message: 'data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.getAllItemInfo = async (req, res) => {
  try {
    let result = await nftIteams.find({});

    return {
      message: 'data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.read_getItemInfo = async (req, res) => {
  try {
    let userId = req.query.id;

    let result = await nftIteams
      .findOne({ _id: userId })
      .populate('currentOwner');

    return {
      message: ' Data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.collectionNft = async (req, res) => {
  try {
    let collectionName = req.query.collection_name;

    let result = await nftIteams
    .find({ chooseCollection: collectionName ,status:'verified'}).populate('currentOwner')
      // .populate('currentOwner');

    return {
      message: ' Data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.collectionActivity = async (req, res) => {
  try {
    let collectionName = req.query.collection_name;

    // let nfts = await nftIteams.find({ chooseCollection: collectionName },{ _id:1})
    
      // console.log('nftID',nfts)
      let result = await history
      .find({ collection_name: collectionName}).populate('nftId').sort({ sCreated: -1 })
      
    return {
      message: ' Data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.update_getItemInfo = async (req, res) => {
  try {
    let nftId = req.query.id;
    // let body = req.body
    let action = req.query.action;
    console.log('snjnsjknssjn', nftId, action);
    //  if (
    //     req.body.action === 'verified'
    //   )
    //  await nftIteams.findOneAndUpdate(
    //     { _id: nftId },
    //     { $set: { status: 'verified' } }
    //   );
    //   if (
    //     req.body.action === 'pending'
    //   )
    //  await nftIteams.findOneAndUpdate(
    //     { _id: nftId },
    //     { $set: { status: 'pending' } }
    //   );
    let result =
      action === 'verified'
        ? await nftIteams.findOneAndUpdate(
            { _id: nftId },
            { $set: { status: 'verified' } }
          )
        : await nftIteams.findOneAndUpdate(
            { _id: nftId },
            { $set: { status: 'pending' } }
          );
    return {
      message: 'status update successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

// exports.update_getItemInfo = async (req, res) => {
//   try {
//     let userId = req.query.id;
//     let result = await nftIteams.findOneAndUpdate(
//       { _id: userId },
//       { $set: { status: 'verified' } }
//     );

//     return {
//       message: 'create item added successfully.',
//       status: true,
//       data: result,
//     };testEmail
//   } catch (error) {
//     throw error;
//   }
// };
exports.read_nftStore = async (req) => {
  try {
    let userId = req.query.id;
    let result = await nftIteams
      .findOne({ _id: userId })
      .populate('currentOwner');
    console.log(userId, result);
    return {
      message: 'Read Data Fetch.....',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};
// exports.buy_nft = async (req,res) => {
//   try {
//     let userId = req.query.id;
//     // const user = await signup.findById(req.user.id);
//     let result = await nftIteams.findOne({ _id: userId });

//     console.log(userId, result);
//     return {
//       message: 'buy Nft Data Fetch.....',
//       status: true,
//       data: result,
//     };
//   } catch (error) {
//     return error;
//   }
// };
exports.upadte_nftStore = async (req) => {
  try {
    let userId = req.body.userId;
    // const uId = parseInt(userId)

    console.log(userId);
    //console.log(`req.file`, req.file);
    // const uploadFile = `${credentials.BASE_URL}fileUpload/${req.file.filename}`;
    const uploadFile = req.file.location;

    let upadte_user = {
      userId: req.body.userId,
      chooseType: req.body.chooseType,
      uploadFile: uploadFile,
      name: req.body.name,
      designation: req.body.designation,
      about: req.body.about,
      chooseCollection: req.body.chooseCollection,
      chooseBlockchain: req.body.chooseBlockchain,
      putOnMarketplace: req.body.putOnMarketplace,
      unlockOncePurchased: req.body.unlockOncePurchased,
      attribute: req.body.attribute,
      levels: req.body.levels,
      stats: req.body.stats,
      explicitAndSensitiveContent: req.body.explicitAndSensitiveContent,
    };
    console.log(upadte_user);
    let result = await nftIteams.findOneAndUpdate(
      { userId: userId },
      { $set: upadte_user }
    );
    console.log(result);
    return {
      message: 'create item  Data Updated..........',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.delete_nftStore = async (req) => {
  try {
    let userId = req.body.userId;
    console.log(userId);
    let userIdData = await nftIteams.findOne({ _id: userId });
    console.log(userIdData);
    if (userIdData) {
      fs.unlink(userIdData.uploadFile, () => {
        console.log('Delete Data');
      });
      let result = await nftIteams.findOneAndRemove({ _id: userId });
      return {
        message: 'Create Item Data deleted..........',
        status: true,
        data: result,
      };
    } else {
      return {
        message: 'Not found this Create Item Data..',
        status: false,
        data: [],
      };
    }
  } catch (error) {
    return error;
  }
};

exports.upload_image = async (req) => {
  try {
    // console.log(req.files.logo_image[0].location)
    return {
      message: 'Image uploaded.....',
      status: true,
      data: req.file.location,
    };
  } catch (error) {
    return error;
  }
};
exports.userLikes = async (req) => {
  try {
    let id = req.query.id;
    console.log(':::::::>', id);
    let userLikes = await nftIteams.find({ likes: id });
    return {
      message: 'user liked posts',
      status: true,
      data: userLikes,
    };
  } catch (error) {
    return error;
  }
};

exports.insert_likes = async (req) => {
  try {
    let id = req.body.id;
    console.log(':::::::>', id);
    let liked = await nftIteams.findByIdAndUpdate(
      req.body.postId,
      {
        $push: { likes: id },
      },
      {
        new: true,
      }
    );
    return {
      message: 'Your Like is added',
      status: true,
      data: liked,
    };
  } catch (error) {
    return error;
  }
};

exports.remove_likes = async (req) => {
  try {
    let id = req.body.id;
    console.log(':::::::>', id);
    let disliked = await nftIteams.findByIdAndUpdate(
      req.body.postId,
      {
        $pull: { likes: id },
      },
      {
        new: true,
      }
    );
    return {
      message: 'unlike successfully',
      status: true,
      data: disliked,
    };
  } catch (error) {
    return error;
  }
};

exports.getPrice = async (req, res) => {
  try {
    let priceRange = req.query.priceRange;
    let priceMin = priceRange.split('-')[0];
    let priceMax = priceRange.split('-')[1];
    // let priceMin = Number(priceRange.split('-')[0]);
    // let priceMax = Number(priceRange.split('-')[1]);
    console.log('typeOf', typeof priceMin, priceMin, priceMax);
    let data = await nftIteams.aggregate([
      {
        $unwind: '$putOnMarketplace',
      },
      {
        $match: {
          $and: [
            {
              'putOnMarketplace.price': {
                $gte: priceMin,
                $lte: priceMax,
              },
            },
          ],
        },
      },
    ]);

    return {
      message: 'Price range found successfully.',
      status: true,
      data: data,
    };
  } catch (error) {
    throw error;
  }
};

exports.uploadData = async (req) => {
  try {
    let result = req.file.location;
    console.log(result);

    return {
      message: 'Image URL range found successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};


exports.viewCounts = async (req) => {
  try {
    const postId = req.params.postId;
  const ipAddress = req.body.ip ;
 
  const hasViewed = await nftIteams.findOneAndUpdate({_id:postId},{
      $addToSet: { viewsCount: ipAddress } 
  },);
  const viewsCount = hasViewed.viewsCount.length;
 
  console.log('postId',postId,ipAddress,viewsCount)
 
    return {  
      message: 'Total views on this post',
      status: true,
      data: viewsCount,
    };
  } catch (error) {
    throw error;
  }
};
