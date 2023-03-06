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
  if (checkBid) {
    let bid = await bidModel.findOneAndDelete({
      // bidder: mongoose.Types.ObjectId(req.userId),
      owner: mongoose.Types.ObjectId(req.body.owner),
      nftId: mongoose.Types.ObjectId(req.body.nftId),
      orderId: mongoose.Types.ObjectId(req.body.orderId),
      bid_status: 'Bid',
    });
    const bidData = bidModel.create({
      // oBidder: req.userId,
      owner: req.body.owner,
      bid_status: 'Bid',
      bid_price: req.body.bid_price,
      nftId: req.body.nftId,
      orderId: req.body.orderId,
      bid_quantity: req.body.bid_quantity,
      bid_deadline: req.body.bid_deadline,
    });
    try {
      return {
        message: 'Bid Created Successfully',
        status: true,
        data: bidData,
      };
    } catch (error) {
      throw error;
    }
  }
};

exports.fetchBidNft = async (req, res) => {
  try {
    return {
      message: 'Bid Data ',
      status: true,
      data: [],
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
