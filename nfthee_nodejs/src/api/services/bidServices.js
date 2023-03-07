const mongoose = require('mongoose');
const { bidModel } = require('../../models');
const { credentials } = require('../../config').constantCredentials;

exports.createBidNft = async (req, res) => {
  console.log(req.body);
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
      bidder: mongoose.Types.ObjectId(req.body.bidder),
      owner: mongoose.Types.ObjectId(req.body.owner),
      nftId: mongoose.Types.ObjectId(req.body.nftId),
      orderId: mongoose.Types.ObjectId(req.body.orderId),
      bid_status: 'Bid',
    });

    let data = {
      bidder: req.body.bidder,
      owner: req.body.owner,
      bid_status: 'Bid',
      bid_price: parseFloat(req.body.bid_price),
      nftId: req.body.nftId,
      orderId: req.body.orderId,
      bid_quantity: req.body.bid_quantity,
      bid_deadline: req.body.bid_deadline,
    };
    const bidData = await bidModel.create(data);

    return {
      message: 'Bid Created Successfully',
      status: true,
      data: bidData,
    };
  }
};

exports.fetchBidNft = async (req, res) => {
  try {
    let nftId = req.body.nftId;
    let result = await bidModel.find({ nftId }).populate('bidder');
    console.log(result);

    return {
      message: 'Bid Data ',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.fetchBids = async (req, res) => {
  try {
    let nftId = req.body.nftId;

    let data = await bidModel.aggregate([
      {
        $match: {
          $and: [
            // { bid_quantity: { $gte: 1 } },
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
          bid_deadline: 1,
        },
      },
      {
        $lookup: {
          from: 'user',
          localField: 'bidder',
          foreignField: '_id',
          as: 'bidder_details',
        },
      },
      { $unwind: '$bidder' },
    ]);

    console.log('Datat==>>', data);

    return {
      message: 'Bid Data ',
      status: true,
      data: data,
    };
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
