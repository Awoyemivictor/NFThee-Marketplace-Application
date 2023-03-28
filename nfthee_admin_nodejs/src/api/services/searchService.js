const { searchModel } = require('../../models');
// let toggle='';
// exports.createToggle = async (req, res) => {
//     try {
//       let newToggle = req.body.toggleValue;
//       let result = await searchModel.create({
//        toggleValue: newToggle 
//       });
//       console.log('toggle', result);
//       return {
//         message: 'add search toggle .',
//         status: true,
//         data: result,
//       };
//     } catch (error) {
//       throw error;
//     }
//   };
exports.addToggle = async (req, res) => {
  try {
    // let nftId = req.query.id;
    // let body = req.body
    let newToggle = req.body.toggle;
    console.log('snjnsjknssjn', newToggle);
   
    let result =
    newToggle === true
        ? await searchModel.findOneAndUpdate(
            
            { $set: { toggleValue: true } }
          )
        : await searchModel.findOneAndUpdate(
            { $set: { toggleValue: false } }
          );
    // let newToggle = req.body.toggle;
    // let result = await searchModel.findOneAndUpdate({
    //   $set: { toggleValue: newToggle },
    // });
    console.log('toggsssle', result);
    return {
      message: 'add search toggle .',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.getToggle = async (req) => {
  try {
    let result = await searchModel.find();
    console.log('toggle', result);
    return {
      message: 'toggle value',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
