const mongoose = require('mongoose');
const fs = require('fs');
const { createCollection } = require('../../models');

const { credentials } = require('../../config').constantCredentials;

// craete collection item

exports.indexAll = async (req, res) => {
  try {
    let result = await createCollection.find({});
    if (result) {
      return {
        message: 'All Create Collection Item Data Fetch.....',
        status: true,
        data: result,
      };
    }
  } catch (error) {
    return error;
  }
};

// exports.createCollectionInfo = async (req, res) => {
//   try {
//     // let user = req.body.user;

//     // // console.log(userId);
//     // console.log('req.files', req.files);
//     let body = req.body;
//     // console.log(body)

//     console.log(logo_image,"kesfnlekf")
// if(body){
//     let addCreateItem = await createCollection.create(body);
//     console.log(addCreateItem)
//     return {
//       message: 'create item added successfully.',
//       status: true,
//       data: addCreateItem,
//     };
//   }
//   } catch (error) {
//     throw error;
//   }
// };
exports.createCollectionInfo = async (req, res) => {
  try {
    // const logo_image = `fileUpload/${req.files.logo_image[0].filename}`;
    // const featured_image = `fileUpload/${req.files.featured_image[0].filename}`;
    // const banner_image = `fileUpload/${req.files.banner_image[0].filename}`;
    const logo_image = req.files.logo_image[0].location;
    const featured_image = req.files.featured_image[0].location;
    const banner_image = req.files.banner_image[0].location;

    console.log(req.files);

    const upadate_data = {
      name: req.body.name,
      logo_image: logo_image,
      featured_image: featured_image,
      banner_image: banner_image,
      url: req.body.url,
      description: req.body.description,
      contract_address: req.body.contract_address,
      nextId: req.body.nextId,
      royalty_percentage: req.body.royalty_percentage,
      links: req.body.links,
      creator_earnings: req.body.creator_earnings,
      blockchain: req.body.blockchain,
      payment_token: req.body.payment_token,
      display_theme: req.body.display_theme,
      explicit_sensitive_content: req.body.explicit_sensitive_content,
      created_by: req.body.created_by,
      // website: req.body.website,
      // facebook: req.body.facebook,
      // linkedin: req.body.linkedin,
      // youtube: req.body.youtube,
    };
    console.log('::::::>', upadate_data);
    let result = await createCollection.create(
      upadate_data
      // { $set: upadate_data }
    );

    //  if (req.files.logo_image) body.logo_image = `fileUpload/${req.files.logo_image[0].filename}`;

    // if (req.files.featured_image) body.featured_image = `fileUpload/${req.files.featured_image[0].filename}`;
    // console.log(body.logo_image,"kesfnlekf")
    // if (req.files.banner_image) body.banner_image = `fileUpload/${req.files.banner_image[0].filename}`;
    if (result) {
      // let addCreateItem = await createCollection.create(result);
      // console.log(addCreateItem)
      return {
        message: 'create item added successfully.',
        status: true,
        data: result,
      };
    }
  } catch (error) {
    throw error;
  }
};
exports.getCollectionInfo = async (req, res) => {
  try {
    let result = await createCollection.find({ status: 'verified' });

    return {
      message: 'data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.getAllInfo = async (req, res) => {
  try {
    let result = await createCollection.find({});

    return {
      message: 'data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.read_getCollectionInfo = async (req, res) => {
  try {
    let userId = req.query.id;
    let result = await createCollection.findOne({ _id: userId });
    return {
      message: 'data find successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.update_getCollectionInfo = async (req, res) => {
  try {
    let userId = req.query.id;
    let result = await createCollection.findOneAndUpdate(
      { _id: userId },
      { $set: { status: 'verified' } }
    );
    return {
      message: 'status updated successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
exports.read_createCollectionInfo = async (req, res) => {
  try {
    let userId = req.query.id;
    // console.log(userId);
    let result = await createCollection
      .findOne({ _id: userId })
      .populate('created_by');

    // console.log(result)
    return {
      message: 'Read Collection Data Fetch.....',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.update_createCollectionInfo = async (req, res) => {
  try {
    let userId = req.body.userId;
    //console.log(userId)
    // console.log(`req.files`, req.files);
    const uploadFileLogo = req.files.logo_image[0].location;
    const uploadFileFeatured = req.files.featured_image[0].location;
    const uploadFileBanner = req.files.banner_image[0].location;
    //console.log(req.files.logo_image[0].filename);
    const upadte_data = {
      userId: req.body.userId,
      logo_image: uploadFileLogo,
      featured_image: uploadFileFeatured,
      banner_image: uploadFileBanner,
      name: req.body.name,
      url: req.body.url,
      description: req.body.description,
      links: req.body.links,
      creator_earnings: req.body.creator_earnings,
      blockchain: req.body.blockchain,
      payment_token: req.body.payment_token,
      display_theam: req.body.display_theam,
      explicit_sensitive_content: req.body.explicit_sensitive_content,
    };
    console.log(upadte_data);
    console.log(userId);
    let result = await createCollection.findOneAndUpdate(
      { userId: userId },
      { $set: upadte_data }
    );
    return {
      message: 'creation item Data Updated..........',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.delete_createCollectionInfo = async (req, res) => {
  try {
    let userId = req.body.userId;
    //console.log(req.body)
    console.log(userId);
    let userIdData = await createCollection.findOne({ userId: userId });
    //console.log(userIdData)
    const userIdDataValue = [
      userIdData.logo_image,
      userIdData.featured_image,
      userIdData.banner_image,
      userIdData.name,
      userIdData.url,
      userIdData.description,
      userIdData.links,
      userIdData.creator_earnings,
      userIdData.blockchain,
      userIdData.payment_token,
      userIdData.display_theam,
    ];
    console.log(userIdDataValue);
    if (userIdData) {
      const trunk = userIdDataValue.toString();
      fs.unlink(trunk, () => {
        console.log('Delete Data');
      });
      let result = await createCollection.findOneAndRemove({ userId: userId });
      return {
        message: 'Create New Item Data deleted..........',
        status: true,
        data: result,
      };
    } else {
      return {
        message: 'Not found this Create New Item Data..',
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
    if (req.file) {
      return {
        message: 'Image uploaded.....',
        status: true,
        data: req.file,
      };
    }
  } catch (error) {
    return error;
  }
};

exports.getCollectionByAddress = async (req) => {
  try {
    console.log(req.body.contractAddress);
    let result = await createCollection.findOne({
      contract_address: req.body.contractAddress,
    });
    let nextId = result.getNextId();
    createCollection.nextId = nextId;

    // createCollection.save({ nextId: nextId });
    return {
      message: 'Collection  Found successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
