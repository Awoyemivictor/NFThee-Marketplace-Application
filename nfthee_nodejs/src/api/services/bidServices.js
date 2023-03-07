const { bidModel } = require('../../models');
const mongoose = require('mongoose');
const { mailerLogin } = require("../../utils/email");
const { credentials } = require('../../config').constantCredentials;

exports.createBidNft = async (req, res) => {
  try {
    // console.log(req.body);
    console.log('Checking Old Bids');
    let checkBid = await bidModel.findOne({
      // bidder: mongoose.Types.ObjectId(req.userId),
      owner: mongoose.Types.ObjectId(req.body.owner),
      nftId: mongoose.Types.ObjectId(req.body.nftId),
      orderId: mongoose.Types.ObjectId(req.body.orderId),
      bid_status: 'Bid',
    });
    console.log(checkBid);
    if (checkBid === null) {
      let bid = await bidModel.findOneAndDelete({
        // bidder: mongoose.Types.ObjectId(req.userId),
        owner: mongoose.Types.ObjectId(req.body.owner),
        nftId: mongoose.Types.ObjectId(req.body.nftId),
        orderId: mongoose.Types.ObjectId(req.body.orderId),
        bid_status: 'Bid',
      });}
  
      let data = {
        // bidder: req.userId,
        bidder: req.body.bidder,
        owner: req.body.owner,
        bid_status: 'Bid',
        bid_price: Number(req.body.bid_price),
        nftId: req.body.nftId,
        orderId: req.body.orderId,
        bid_quantity: req.body.bid_quantity,
        bid_deadline: req.body.bid_deadline,
      };
      const bidData = await bidModel.create(data);
      if (bidData){
        let email = "mohit.lnwebworks@gmail.com";
        let Subject = "Created Bid";
        let message = `<h3>created your Bid successfully</h3><p>to check your bid nft<a href='http://localhost:3000/exploredetail/${data.nftId}'><h4>Click here</h4></a></p>`;
        console.log("mkamkkkkkkkkkkkkkkkkkkkkkkkkk", message, email);
        mailerLogin(email, message,Subject);
      }
    return {
      message: 'Bid Created Successfully',
      status: true,
      data: bidData,
    };
  } catch (error) {
    throw error;
  }
};

// exports.updateBidNft = async (req, res) => {
//   try {
//     return {
//       message: 'Bid Updated Successfully',
//       status: true,
//       data: [],
//     };
//   } catch (error) {
//     throw error;
//   }
// };
exports.updateBidNft = async (req, res) => {
  try {
    console.log('Checking Old Bids');
    let bidID = req.body.bidID;
    let CheckBid = await bidModel.findById(bidID);
    console.log('checkbid',CheckBid)
    if (CheckBid) {
      if (
        req.body.action == 'Delete' ||
        req.body.action == 'Cancelled' ||
        req.body.action === 'Rejected'
      ) {
        await bidModel.findOneAndDelete(
          { _id: mongoose.Types.ObjectId(bidID) },
          function (err, delBid) {
            if (err) {
              console.log('Error in Deleting Bid' + err);
             throw err
            } else {
              console.log('Bid Deleted : ', delBid);
              return { message: 'Bid Cancelled', delBid };
            }
          }
        );
      } else {
        await bidModel.findOneAndUpdate(
          { _id: mongoose.Types.ObjectId(bidID) },
          { oBidStatus: req.body.action },
          function (err, rejBid) {
            if (err) {
              console.log('Error in Rejecting Bid' + err);
              throw err
            } else {
              console.log('Bid Rejected : ', rejBid);
              return {status:true, message: 'Bid Rejected', rejBid };
            }
          }
        );
      }
    } else {
      return {message:'Bid Not Found'};
    }
  } catch (error) {
    throw error
  }
};

exports.fetchBidNft = async (req, res) => {

  try {
    // if (!req.userId) return res.send('Unauthorized Access');
    let nftId = req.body.nftId;
    let orderId = req.body.orderId;
    let bidder = req.body.bidder;
    let bid_status = req.body.bid_status;

    console.log('data',nftId,orderId,bidder,bid_status)
    

    let data = await bidModel.aggregate([
      {
        $match: {
          $and: [
            // { bid_quantity: { $gte: 1 } },
            // { nftId: mongoose.Types.ObjectId(nftId) },
            { nftId: mongoose.Types.ObjectId(nftId) },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          bidder: 1,
          owner: 1,
          bid_status: 1,
          bid_price: 1,
          nftId: 1,
          orderId: 1,
          bid_quantity: 1,
          // oBuyerSignature: 1,
          bid_deadline: 1,
        },
      },
      // {
      //   $lookup: {
      //     from: 'user',
      //     localField: 'bidder',
      //     foreignField: '_id',
      //     as: 'bidder_detail',
      //   },
      // },
      // { $unwind: '$bidder' },
    ])

    console.log('Datat==>>',data, data.length);

    return {
      message: 'Bid Details',
      status: true,
      data: data,
    }

    
  } catch (error) {
    throw error;
  }
};

exports.acceptBidNft = async (req, res) => {
  try {
    return {
      message: 'Bid Accepted Successfully',
      status: true,
      data: [],
    };
  } catch (error) {
    throw error;
  }
};
