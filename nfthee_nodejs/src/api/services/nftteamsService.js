const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');

const { nftIteams } = require('../../models');

const { credentials } = require('../../config').constantCredentials;


exports.index = async (req) => {
  
  try {
    // console.log(req.query)
    let str = req.query.str ? { name: { $regex: new RegExp(req.query.str, 'i') } } : {};
    let blockChain = req.query.blockChain ? { chooseBlockchain: { $regex: new RegExp(req.query.blockChain.split(',').join('|'),'i') }  } : {};
    let collection = req.query.collection ? { chooseCollection: { $regex: new RegExp(req.query.collection.split(',').join('|'),'i') }  } : {};

    // console.log({ str});
    let result = await nftIteams.find({ ...str,...blockChain,...collection}).sort({id:-1});
    // console.log({ result });
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
// exports.index = async (req) => {

// try {
// console.log(req.query)
// let str = req.query.str ? { name: { $regex: req.query.str } } : {};
// let blockchain = req.query.blockchain ? { chooseBlockchain: { $regex: req.query.blockchain, $options: 'i' } } : {};
// let collection= req.query.collection? { chooseCollection: { $regex: req.query.collection } } : {};
// console.log({ str, blockchain });
// let result = await nftIteams.find({ ...str, ...blockchain,...collection }).sort({id:-1});
// console.log({ result });
// if (result) {
// return {
// message: 'All Create Item Data Fetch.....',
// status: true,
// data: result,
// };
// }
// } catch (error) {
// return error;
// }
// };


  // exports.index = async (req) => {
  //   try {
  //     let str = req.query.str
  //       ? {
  //           $or: [
  //             { name: { $regex: req.query.str } },
  //             { about: { $regex: req.query.str } },
  //           ],
  //         } 
  //       : {};
        
  //     console.log({ str});
  //     let result = await nftIteams.find(str).sort({ _id: -1 });
  //   console.log({ result });
  //     if (result) {
  //       return {
  //         message: 'All Create Item Data Fetch.....',
  //         status: true,
  //         data: result,
  //       };
  //     }
  //   } catch (error) {
  //     return error;
  //   }
  // };

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
    let result = await nftIteams.create(req.body);
    return {
      message: 'Create Item Data Save..........',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.read_nftStore = async (req) => {
  try {
    let userId = req.body.userId;
    console.log(userId);
    let result = await nftIteams.findOne({ userId: userId });
    return {
      message: 'Read Data Fetch.....',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.upadte_nftStore = async (req) => {
  try {
    let userId = req.body.userId;
    // const uId = parseInt(userId)

    console.log(userId);
    //console.log(`req.file`, req.file);
    const uploadFile = `${credentials.BASE_URL}fileUpload/${req.file.filename}`;
    // console.log(uploadFile)

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
    let userIdData = await nftIteams.findOne({ userId: userId });
    console.log(userIdData);
    if (userIdData) {
      fs.unlink(userIdData.uploadFile, () => {
        console.log('Delete Data');
      });
      let result = await nftIteams.findOneAndRemove({ userId: userId });
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
    return {
      message: 'Image uploaded.....',
      status: true,
      data: req.file,
    };
  } catch (error) {
    return error;
  }
};
