const mongoose = require('mongoose');
const fs = require('fs');

const { categoryModel, suggestionModel } = require('../../models');
const { credentials } = require('../../config').constantCredentials;

// exports.addCategory = async (req, res) => {
//     try {

//         let body = req.body;
//         let find = await categoryModel.findOne({ name: body.name });
//         if (find) {
//             return {
//                 message: "Category Name Already Exist.",
//                 status: false,
//                 data: {}
//             }
//         }
//         let addCategory = await categoryModel.create(body);

//         return {
//             message: "Category added successfully.",
//             status: true,
//             data: addCategory,
//         };

//     } catch (error) {
//         throw error;
//     }
// }

exports.addCategory = async (req, res) => {
  try {
    let body = req.body;
    if (req.file) {
      req.body.icon = req.file.location;
    }

    let find = await categoryModel.findOne({ name: body.name });
    if (find) {
      return {
        message: 'Category Name Already Exist.',
        status: false,
        data: {},
      };
    }
    let addCategory = await categoryModel.create(body);

    return {
      message: 'Category added successfully.',
      status: true,
      data: addCategory,
    };
  } catch (error) {
    throw error;
  }
};

exports.getCategory = async (req, res) => {
  try {
    let query = {};
    if (req.query?.id) {
      query = { _id: req.query.id };
    }
    let findData = await categoryModel.find(query).sort({ createdAt: -1 });
    // for(let data of findData) {
    //     data.icon = `${credentials.BASE_URL}${data.icon}`;
    // }
    return {
      message: 'Getting category listing.',
      status: true,
      data: findData,
    };
  } catch (error) {
    throw error;
  }
};

exports.updateCategory = async (req, res) => {
  try {
    // console.log('req.files', req.files);
    let body = req.body;
    let find = await categoryModel.findOne({
      name: body.name,
      _id: { $ne: req.body.catId },
    });
    if (find) {
      return {
        message: 'Category Name Already Exist.',
        status: false,
        data: {},
      };
    }
    let addCategory = await categoryModel.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(req.body.catId) },
      { $set: body },
      { $new: true }
    );
    return {
      message: 'Category added successfully.',
      status: true,
      data: addCategory,
    };
  } catch (error) {
    throw error;
  }
};

exports.deleteCategory = async (req) => {
  try {
    let catId = req.query.catId;
    let categoryData = await categoryModel.findById({
      _id: mongoose.Types.ObjectId(catId),
    });
    if (categoryData) {
      let result = await categoryModel.findByIdAndRemove({
        _id: mongoose.Types.ObjectId(catId),
      });
      return {
        message: 'category Data deleted..........',
        status: true,
        data: {},
      };
    } else {
      return {
        message: 'Not found this category..',
        status: false,
        data: [],
      };
    }
  } catch (error) {
    console.log('error -->', error);
    throw error;
  }
};

exports.getSuggestion = async (req) => {
  try {
    let query = {};
    if (req.query?.id) {
      query = { _id: req.query.id };
    }
    const suggestionData = await suggestionModel
      .find(query)
      .sort({ createdAt: -1 });
    return {
      message: 'Getting suggestion data',
      status: true,
      data: suggestionData,
    };
  } catch (error) {
    throw error;
  }
};

exports.deleteSuggestion = async (req) => {
  try {
    const id = req.query.id;
    let deletedSuggestion = await suggestionModel.findByIdAndDelete(id);
    console.log(deletedSuggestion);
    if (deletedSuggestion) {
      return {
        message: 'Deleted Suggestion.',
        status: true,
        data: deletedSuggestion,
      };
    } else {
      return {
        message: 'Suggestion not found',
        status: false,
        data: {},
      };
    }
  } catch (error) {
    return {
      message: 'Something went wrong.',
      status: false,
      data: {},
    };
  }
};
