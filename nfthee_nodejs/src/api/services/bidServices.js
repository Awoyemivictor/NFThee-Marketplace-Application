const mongoose = require("mongoose");
const { bidModel } = require("../../models");
const { signup, orderModel, nftIteams } = require("../../models");
const { mailerLogin } = require("../../utils/email");
const { credentials } = require("../../config").constantCredentials;






// exports.updateBidNft = async (reqnull, res) => {
//   try {

//     let data
//     console.log('Checking Old Bids');
//     let bidID = req.body.bidID;
//     // let CheckBid = await bidModel.findById(bidID);
//     // console.log('checkbid',CheckBid)

//     // if (CheckBid) {
//       if (
//         req.body.action === 'Delete' ||
//         req.body.action === 'Cancelled' ||
//         req.body.action === 'Rejected'
//       )
//     // {
//          await bidModel.findOneAndDelete(
//           { _id: bidID },function (err, delBid) {
//             if (err) {
//               console.log('Error in Deleting Bid' + err);
//              throw err
//             } else {
//               console.log('Bid Deleted : ', delBid);
//               // return { message: 'Bid Cancelled', delBid };
//             }
//           }

//         );
//         console.log(data)

//         /* function (err, delBid) {
//             if (err) {
//               console.log('Error in Deleting Bid' + err);
//              throw err
//             } else {
//               console.log('Bid Deleted : ', delBid);
//               // return { message: 'Bid Cancelled', delBid };
//             }
//           } */
//       // }
//       // else{
//       //   return console.log('out of list',err)

//       //   // console.log('out of list')
//       // }}
//       // console.log('checkbid>>>>>>>>>::::::',CheckBid)
//       return {
//         message: 'Bid Details',
//         status: true,
//         data: data,
//       }
//       // else {
//     //     await bidModel.findOneAndUpdate(
//     //       { _id: mongoose.Types.ObjectId(bidID) },
//     //       { oBidStatus: req.body.action },
//     //       function (err, rejBid) {
//     //         if (err) {
//     //           console.log('Error in Rejecting Bid' + err);
//     //           throw err
//     //         } else {
//     //           console.log('Bid Rejected : ', rejBid);
//     //           return {status:true, message: 'Bid Rejected', rejBid };
//     //         }
//     //       }
//     //     );
//     //   }
//     // }
//     //  else {
//     //   return {message:'Bid Not Found'};
//     // }
//   } catch (error) {
//     throw error
//   }
// };
exports.createBidNft = async (req, res) => {
  try {
    console.log("Checking Old Bids");
    let existingBid = await bidModel.findOne({
      owner: mongoose.Types.ObjectId(req.body.owner),
      nftId: mongoose.Types.ObjectId(req.body.nftId),
      orderId: mongoose.Types.ObjectId(req.body.orderId),
      bid_status: "Bid",
      bidder: mongoose.Types.ObjectId(req.body.bidder),
    });
    
    let bidData;
    if (existingBid) {
      existingBid.bid_price = Number(req.body.bid_price);
      existingBid.bid_quantity = req.body.bid_quantity;
      existingBid.bid_deadline = req.body.bid_deadline;
      bidData = await existingBid.save();
    } else {
      let data = {
        bidder: req.body.bidder,
        owner: req.body.owner,
        bid_status: "Bid",
        bid_price: Number(req.body.bid_price),
        nftId: req.body.nftId,
        orderId: req.body.orderId,
        bid_quantity: req.body.bid_quantity,
        bid_deadline: req.body.bid_deadline,
      };
      bidData = await bidModel.create(data);
      
    }
const data1= await bidModel.find(bidData).populate('bidder').populate('owner')
  
 console.log('dataaa', data1[0].bidder.email_address, data1[0].owner.user_name,);
// console.log('createBid',data1)
if (bidData) {
        let email = data1[0].owner.email_address;
        let Subject = "Created Bid";
        let message = `<!DOCTYPE html>
        <html>
          <head>
            <title>Welcome!</title>
            <style>
           
              body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
              }
              
              h1 {
                color: #007bff;
                text-align: center;
              }
              h2 {
                color: #007bff;
                text-align: center;
              }
              h3 {
                text-align: center;
              }
              p {
                font-size: 18px;
                text-align: center;
              }
              
              img {
                display: block;
                margin:  auto;
                max-width:50%;
              }
            </style>
          </head>
          <body>
          <h1> Bid On Your Nft</h1>
        <h3>Dear <h2>${data1[0].owner.user_name}</h2>,
  
        I am writing to submit my bid for the <a href='${credentials.BASE_FRONTEND_URL}/exploredetail/${data1[0].nftId}'> <h4>Click here to check nft</h4></a> that you have listed for sale on [NFT Platform Name]. I am very interested in owning this piece of digital art and believe that my bid reflects its true value.
        
        After careful consideration, I am submitting a bid of [dollar amount] for this NFT. Please let me know if my bid is accepted or if you have any questions. Thank you for your time and consideration.
        
        Best regards,
        </h3>
        <h2>${data1[0].bidder.user_name}</h2>
        <img src="https://wallpaperaccess.com/full/8054247.jpg" alt="Welcome">
      </body>
    </html`;
        // let message = `<h3>created your Bid successfully</h3><p>to check your bid nft><h4>Click here</h4></a></p>`;
        console.log("mkamkkkkkkkkkkkkkkkkkkkkkkkkk", message, email);
        mailerLogin(email, message, Subject);
      }
    return {
      message: "Bid Created/Updated Successfully",
      status: true,
      data: data1,
    };
  } catch (error) {
    throw error;
  }
};

exports.updateBidNft = async (req, res) => {
  try {
    let data;
    let bidID = req.body.bidID;
    if (
      req.body.action === "Delete" ||
      req.body.action === "Cancelled" ||
      req.body.action === "Rejected"
    ) {
      data = await bidModel.findOneAndDelete(
        { _id: bidID }
        // function (err, delBid) {
        //   if (err) {
        //     console.log('Error in Deleting Bid' + err);
        //     throw err;
        //   } else {
        //     console.log('Bid Deleted : ', delBid);
        //     return delBid;
        //   }
        // }
      );
    }
    console.log(data);
    return {
      message: "Bid deleted",
      status: true,
      data: data,
    };
  } catch (error) {
    throw error;
  }
};

exports.userBids = async (req, res) => {
  try {
    let id = req.query.id;
    let result = await bidModel.find({ bidder: id }).populate("nftId");
    // let result = await bidModel.find({bidder:id}).populate('bidder');
    console.log(result);

    return {
      message: "User Bid Data ",
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.fetchBidNft = async (req, res) => {
  try {
    let nftId = req.body.nftId;
    let result = await bidModel.find({ nftId }).populate("bidder");
    console.log(result);

    return {
      message: "Bid Data ",
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.fetchOffer = async (req, res) => {
  try {
    let ownerId = req.body.ownerId;
    let result = await bidModel.find({ ownerId }).populate("nftId");
    console.log(result);

    return {
      message: "Bid Data ",
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};


// exports.acceptBidNft = async (req, res) => {
//   console.log(req.body);
//   try {
//     // if (!req.userId) return res.send('Unauthorized');
//     // if (!req.body.bidID) return res.send('bid is required');
//     console.log("Checking Old Bids");
//     let erc721 = req.body.erc721;
//     let bidID = req.body.bidID;
//     let status = req.body.bid_status;
//     let qty_sold = req.body.qty_sold;
//     let BidData = await bidModel.findById(bidID);
//     console.log('bidData:::::::::::::::::::::::',BidData);
//     let data1;
//     if (BidData) {
//       let oNFTId = BidData.nftId;
//       let orderId = BidData.orderId;
//       let boughtQty = parseInt(BidData.bid_quantity);
//       let oBidder = BidData.bidder;
//       let BuyerData = await signup.findById(oBidder);
//       let oBuyer = BuyerData.account_address;
//       let oOwner = BidData.owner;
//       let OwnerData = await signup.findById(oOwner);
//       let oSeller = OwnerData.account_address;
//       console.log(
//         "oBuyer",
//         oNFTId,
//         orderId,
//         oBidder,
//         oOwner,
//         BuyerData,
//         oBuyer,
//         OwnerData,
//         oSeller
//       );
//       data1 = await orderModel.updateOne(
//         { _id: orderId },
//         {
//           $set: {
//             order_status: status,
//             quantity_sold: qty_sold,
//           },
//         },
//         {
//           upsert: true,
//         }
//         // (error) => {
//         //   if (error) throw error;
//         // }
//       );

//       ///hold
//       // let _NFT = await nftIteams.findOne({
//       //   _id: mongoose.Types.ObjectId(oNFTId),
//       // }).select('owned_by -_id');

//       await nftIteams.findOne({ _id: mongoose.Types.ObjectId(oNFTId) });
//       let currentQty = data1.nft_quantity;

//       let leftQty = currentQty - boughtQty;
//       if (leftQty < 1) {
//         // let data = await nftIteams.findOneAndUpdate(
//        let data= await nftIteams
//           .findOneAndUpdate(
//             { _id: mongoose.Types.ObjectId(oNFTId) },
//             {
//               $pull: {
//                 owned_by: { address: oSeller },
//               },
//             }
//           )
//           .catch((e) => {
//             console.log("Error1", e.message);
//           });
//         //comment
//         // console.log(data);
//       } else {
//         await nftIteams
//           .findByIdAndUpdate(
//             {
//               _id: mongoose.Types.ObjectId(oNFTId),
//               "owned_by[0].address": oSeller,
//             },
//             {
//               $set: {
//                 "owned_by.$.nft_quantity": leftQty,
//               },
//             }
//           )
//           .catch((error) => {
//             console.log("error2", error);
//           });
//       }

//       console.log("Crediting Buyer", oBuyer);
//       let subDocId = await nftIteams.exists({
//         _id: mongoose.Types.ObjectId(oNFTId),
//         "owned_by.address": oBuyer,
//       });

//       console.log(subDocId);
//       if (subDocId) {
//         console.log("Subdocument Id", subDocId,oNFTId);
//         let _NFTB = await nftIteams
//           .find({
//             _id: mongoose.Types.ObjectId(oNFTId),
//             "owned_by.address": oBuyer,
//           })
//           // .select("owned_by -_id");
//         console.log("_NFTB-------->", _NFTB,_NFTB[0].owned_by,_NFTB[0].owned_by[0].address, oBuyer);
//         console.log(
//           "Quantity found for buyers",
//           _NFTB[0].owned_by.find((o) => o.address === oBuyer.toLowerCase())
//             .quantity
//         );
//         //work
//         currentQty = _NFTB[0].owned_by.find(
//           (o) => o.address === oBuyer.toLowerCase()
//         ).quantity
//           ? parseInt(
//               _NFTB[0].owned_by.find((o) => o.address === oBuyer.toLowerCase())
//                 .quantity
//             )
//           : 0;
//         let ownedQty = currentQty + boughtQty;
//         await nftIteams
//           .findOneAndUpdate(
//             {
//               _id: mongoose.Types.ObjectId(oNFTId),
//               "owned_by.address": oBuyer,
//             },
//             {
//               $set: {
//                 "owned_by.$.quantity": parseInt(ownedQty),
//               },
//             },
//             { upsert: true, runValidators: true }
//           )
//           .catch((e) => {
//             console.log("Error1", e.message);
//           });
//       } else {
//         console.log("Subdocument Id not found");
//         let dataToadd = {
//           address: oBuyer,
//           quantity: parseInt(boughtQty),
//         };
//         await nftIteams.findOneAndUpdate(
//           { _id: mongoose.Types.ObjectId(oNFTId) },
//           { $addToSet: { owned_by: dataToadd } },
//           { upsert: true }
//         );
//         console.log("wasn't there but added");
//       }

//       await bidModel.findOneAndUpdate(
//         {
//           _id: mongoose.Types.ObjectId(bidID),
//         },
//         { bid_status: "Accepted" }
//         // function (err, acceptBid) {
//         //   if (err) {
//         //     console.log('Error in Accepting Bid' + err);
//         //     return res.send(err);
//         //   } else {
//         //     console.log('Bid Accepted : ', acceptBid);
//         //   }
//         // }
//       );
//       console.log(erc721)
//       if (erc721) {
//         console.log("===Owner Data", oOwner, oNFTId);
//         await bidModel
//           .findOneAndDelete({
//             oOwner: mongoose.Types.ObjectId(oOwner),
//             oNFTId: mongoose.Types.ObjectId(oNFTId),
//             // oBidStatus: 'Bid',
//           })
//           .then(function () {
//             console.log("Data deleted");
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       } else {
//         let _order = await orderModel.find({
//           _id: mongoose.Types.ObjectId(orderId),
//         });
//         // let leftQty = _order.token_quantity - _order.quantity_sold;
//         let leftQty = 2 - 1;
//         console.log('leftQty',leftQty)
//         if (leftQty === 0) {
//           await orderModel.deleteOne({ _id: mongoose.Types.ObjectId(orderId) });
//         }
//         console.log("left qty 1155", leftQty);
//         await bidModel
//           .deleteMany({
//             oOwner: mongoose.Types.ObjectId(oOwner),
//             oNFTId: mongoose.Types.ObjectId(oNFTId),
//             bid_status: "Bid",
//             bid_quantity: { $gte: leftQty },
//           })
//           .then(function () {
//             console.log("Data deleted from 1155",_order)
//             return {_order}
//             // data1=_order
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       }

//       return ('updated order',data1);
//     }
//     console.log("DATAAAA>::::::::::::::::::::6409b4d58c73a4b1c345e757:", data1);
//   //   if (data1) {
//   //     let email = data1[0].owner.email_address;
//   //     let Subject = "Created Bid";
//   //     let message = `<!DOCTYPE html>
//   //     <html>
//   //       <head>
//   //         <title>Welcome!</title>
//   //         <style>
         
//   //           body {
//   //             font-family: Arial, sans-serif;
//   //             background-color: #f2f2f2;
//   //           }
            
//   //           h1 {
//   //             color: #007bff;
//   //             text-align: center;
//   //           }
//   //           h2 {
//   //             color: #007bff;
//   //             text-align: center;
//   //           }
//   //           h3 {
//   //             text-align: center;
//   //           }
//   //           p {
//   //             font-size: 18px;
//   //             text-align: center;
//   //           }
            
//   //           img {
//   //             display: block;
//   //             margin:  auto;
//   //             max-width:50%;
//   //           }
//   //         </style>
//   //       </head>
//   //       <body>
//   //       <h1> Bid On Your Nft</h1>
//   //     <h3>Dear <h2>${data1[0].owner.user_name}</h2>,

//   //     I am writing to submit my bid for the <a href='${credentials.BASE_FRONTEND_URL}/exploredetail/${data1[0].nftId}'> <h4>Click here to check nft</h4></a> that you have listed for sale on [NFT Platform Name]. I am very interested in owning this piece of digital art and believe that my bid reflects its true value.
      
//   //     After careful consideration, I am submitting a bid of [dollar amount] for this NFT. Please let me know if my bid is accepted or if you have any questions. Thank you for your time and consideration.
      
//   //     Best regards,
//   //     </h3>
//   //     <h2>${data1[0].bidder.user_name}</h2>
//   //     <img src="https://wallpaperaccess.com/full/8054247.jpg" alt="Welcome">
//   //   </body>
//   // </html`;
//   //     // let message = `<h3>created your Bid successfully</h3><p>to check your bid nft><h4>Click here</h4></a></p>`;
//   //     console.log("mkamkkkkkkkkkkkkkkkkkkkkkkkkk", message, email);
//   //     mailerLogin(email, message, Subject);
//   //   }
//     return {
//       message: "Bid updated",
//       status: true,
//       data: data1,
//     };
//   } catch (error) {
//     throw error;
//   }
// };
// exports.createBidNft = async (req, res) => {
//   try {
//     console.log("Checking Old Bids");
//     let existingBid = await bidModel.findOne({
//       owner: mongoose.Types.ObjectId(req.body.owner),
//       nftId: mongoose.Types.ObjectId(req.body.nftId),
//       orderId: mongoose.Types.ObjectId(req.body.orderId),
//       bid_status: "Bid",
//       bidder: mongoose.Types.ObjectId(req.body.bidder),
//     }).populate('bidder');
    
//     let bidData;
//     if (existingBid) {
//       existingBid.bid_price = Number(req.body.bid_price);
//       existingBid.bid_quantity = req.body.bid_quantity;
//       existingBid.bid_deadline = req.body.bid_deadline;
//       bidData = await existingBid.save();
     

//     } else {
//       let data = {
//         bidder: req.body.bidder,
//         owner: req.body.owner,
//         bid_status: "Bid",
//         bid_price: Number(req.body.bid_price),
//         nftId: req.body.nftId,
//         orderId: req.body.orderId,
//         bid_quantity: req.body.bid_quantity,
//         bid_deadline: req.body.bid_deadline,
//       };
//       bidData = await bidModel.create(data);
//     }
//     bidData = await bidData.populate('bidder');

//     console.log('dataaa',bidData.bidder.email_address,bidData.owner.user_name,bidData.bidder.user_name)

    
//     return {
//       message: "Bid Created/Updated Successfully",
//       status: true,
//       data: bidData,
//     };
//   } catch (error) {
//     throw error;
//   }
// };

exports.acceptBidNft = async (req, res) => {
  console.log(req.body);
  try {
    // if (!req.userId) return res.send('Unauthorized');
    // if (!req.body.bidID) return res.send('bid is required');
    console.log("Checking Old Bids");
    let erc721 = req.body.erc721;
    let bidID = req.body.bidID;
    let status = req.body.bid_status;
    let qty_sold = req.body.qty_sold;
    let BidData = await bidModel.findById(bidID);
    console.log(BidData);
    let data1;
    let response = {}
    if (BidData) {
      let oNFTId = BidData.nftId;
      let orderId = BidData.orderId;
      let boughtQty = parseInt(BidData.bid_quantity);
      let oBidder = BidData.bidder;
      let BuyerData = await signup.findById(oBidder);
      let oBuyer = BuyerData.account_address;
      let oOwner = BidData.owner;
      let OwnerData = await signup.findById(oOwner);
      let oSeller = OwnerData.account_address;
      console.log(
        "oBuyer",
        oNFTId,
        orderId,
        oBidder,
        oOwner,
        BuyerData,
        oBuyer,
        OwnerData,
        oSeller
      );
      data1 = await orderModel.updateOne(
        { _id: orderId },
        {
          $set: {
            order_status: status,
            quantity_sold: qty_sold,
          },
        },
        {
          upsert: true,
        }
        // (error) => {
        //   if (error) throw error;
        // }
      );

      ///hold
      // let _NFT = await nftIteams.findOne({
      //   _id: mongoose.Types.ObjectId(oNFTId),
      // }).select('owned_by -_id');

      await nftIteams.findOne({ _id: mongoose.Types.ObjectId(oNFTId) });
      let currentQty = data1.nft_quantity;

      let leftQty = currentQty - boughtQty;
      if (leftQty < 1) {
        // let data = await nftIteams.findOneAndUpdate(
       let data= await nftIteams
          .findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(oNFTId) },
            {
              $pull: {
                owned_by: { address: oSeller },
              },
            }
          )
          .catch((e) => {
            console.log("Error1", e.message);
          });
        //comment
        // console.log(data);
      } else {
        await nftIteams
          .findByIdAndUpdate(
            {
              _id: mongoose.Types.ObjectId(oNFTId),
              "owned_by.address": oSeller,
            },
            {
              $set: {
                "owned_by.$.nft_quantity": leftQty,
              },
            }
          )
          .catch((error) => {
            console.log("elet response = {}rror2", error);
          });
      }

      console.log("Crediting Buyer", oBuyer);
      let subDocId = await nftIteams.exists({
        _id: mongoose.Types.ObjectId(oNFTId),
        "owned_by.address": oBuyer,
      });

      console.log(subDocId);
      if (subDocId) {
        console.log("Subdocument Id", subDocId);
        let _NFTB = await nftIteams
          .findOne({
            _id: mongoose.Types.ObjectId(oNFTId),
            "owned_by.address": oBuyer,
          })
          .select("owned_by -_id");
        console.log("_NFTB-------->", _NFTB, oBuyer);
        console.log(
          "Quantity found for buyers"
          // _NFTB.owned_by.find((o) => o.address === oBuyer.toLowerCase())
          //   .quantity
        );
        //work
        currentQty = _NFTB.owned_by.find(
          (o) => o.address === oBuyer.toLowerCase()
        ).quantity
          ? parseInt(
              _NFTB.owned_by.find((o) => o.address === oBuyer.toLowerCase())
                .quantity
            )
          : 0;
        let ownedQty = currentQty + boughtQty;
        await nftIteams
          .findOneAndUpdate(
            {
              _id: mongoose.Types.ObjectId(oNFTId),
              "owned_by.address": oBuyer,
            },
            {
              $set: {
                "owned_by.$.quantity": parseInt(ownedQty),
              },
            },
            { upsert: true, runValidators: true }
          )
          .catch((e) => {
            console.log("Error1", e.message);
          });
      } else {
        console.log("Subdocument Id not found");
        let dataToadd = {
          address: oBuyer,
          quantity: parseInt(boughtQty),
        };
        await nftIteams.findOneAndUpdate(
          { _id: mongoose.Types.ObjectId(oNFTId) },
          { $addToSet: { owned_by: dataToadd } },
          { upsert: true }
        );
        console.log("wasn't there but added");
      }

      await bidModel.findOneAndUpdate(
        {
          _id: mongoose.Types.ObjectId(bidID),
        },
        { bid_status: "Accepted" }
        // function (err, acceptBid) {
        //   if (err) {
        //     console.log('Error in Accepting Bid' + err);
        //     return res.send(err);
        //   } else {
        //     console.log('Bid Accepted : ', acceptBid);
        //   }
        // }
      );
      console.log(erc721)
      if (erc721) {
        console.log("===Owner Data", oOwner, oNFTId);
        await bidModel
          .findOneAndDelete({
            oOwner: mongoose.Types.ObjectId(oOwner),
            oNFTId: mongoose.Types.ObjectId(oNFTId),
            // oBidStatus: 'Bid',
          })
          .then(function () {
            console.log("Data deleted");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        let _order = await orderModel.find({
          _id: mongoose.Types.ObjectId(orderId),
        });
        // let leftQty = _order.token_quantity - _order.quantity_sold;
        let leftQty = 2 - 1;
        console.log('leftQty',leftQty)
        if (leftQty === 0) {
          await orderModel.deleteOne({ _id: mongoose.Types.ObjectId(orderId) });
        }
        console.log("left qty 1155", leftQty);
        
        await bidModel
          .deleteMany({
            oOwner: mongoose.Types.ObjectId(oOwner),
            oNFTId: mongoose.Types.ObjectId(oNFTId),
            bid_status: "Bid",
            bid_quantity: { $gte: leftQty },
          })
          .then(function (req,res) {
            console.log("Data deleted from 1155",_order)
            response = _order;
            //  console.log('data1',data1)
            //  return data1;
             
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      //comment
      // console.log(data);
      console.log("DATAAAA>::::::::::::::::::::6409b4d58c73a4b1c345e757:", data1,"--",response);
      return {
        message: "Bid updated",
        status: true,
        data: data1,
      };
    }

    
  } catch (error) {
    throw error;
  }
};