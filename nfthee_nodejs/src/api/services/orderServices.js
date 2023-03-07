const mongoose = require('mongoose');
const fs = require('fs');

const { orderModel, nftIteams } = require('../../models');
const { mailerLogin } = require('../../utils/email');
const { credentials } = require('../../config').constantCredentials;

exports.createOrder = async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    let orderDate = new Date().setFullYear(new Date().getFullYear() + 10);
    let validity = Math.floor(orderDate / 1000);
    const order = {
      seller_address: req.body.seller_address, //walletADDRESS OF Seller
      tokenId: req.body.tokenId, //TokenID
      token_address: req.body.collection, // Collection contract address
      token_quantity: req.body.quantity,
      order_type: req.body.saleType,
      order_payment_token: req.body.tokenAddress, //the payment token address ERC20
      token_price: req.body.token_price,
      validity_upto: req.body.validUpto,
      oSalt: req.body.oSalt,
      nftId: req.body.nftId,
      date_created: req.body.date_created,
      seller: req.body.seller,
      auction_end_date: req.body.auction_end_date,
      order_status: req.body.order_status,
      quantity_sold: req.body.quantity_sold,
    };

    console.log('==>', order);
    let result = await orderModel.create(order);
    if (result) {
      let email = 'mohit.lnwebworks@gmail.com';
      let Subject = 'Created Order';
      let message = `<h3>created your order successfully</h3><p>to check your order<a href='${credentials.BASE_FRONTEND_URL}/exploredetail/${order.nftId}'><h4>Click here</h4></a></p>`;
      console.log('mkamkkkkkkkkkkkkkkkkkkkkkkkkk', message, email);
      mailerLogin(email, message, Subject);
    }
    return {
      message: 'Order placed Successfully',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.getOrder = async (req) => {
  try {
    let orderId = req.body.orderId;

    const result = await orderModel.findOne({
      _id: orderId,
    });
    return {
      message: 'Order Details',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.updateOrder = async (req) => {
  try {
    if (!req.body.nftId)
      return {
        message: 'NFT Id Required',
        status: false,
        data: [],
      };

    const result = await orderModel.updateOne(
      { _id: req.body.orderId },
      {
        $set: {
          order_status: req.body.order_status,
          quantity_sold: req.body.quantity_sold,
        },
      },
      {
        upsert: true,
      }
    );

    //*deduct previous owner
    let NFT = await nftIteams.findOne({
      _id: mongoose.Types.ObjectId(req.body.nftId),
    });
    // .select('nOwnedBy -_id');

    // console.log('_NFT-------->', NFT);
    // let currentQty = NFT.nOwnedBy.find(
    //   (o) => o.address === req.body.oSeller.toLowerCase()
    // ).quantity;

    // let boughtQty = parseInt(req.body.oQtyBought);
    // let leftQty = currentQty - boughtQty;
    if (leftQty < 1) {
      await NFT.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.body.nftId) },
        {
          $pull: {
            nOwnedBy: { address: req.body.seller_address },
          },
        }
      );
    } else {
      await NFT.findOneAndUpdate(
        {
          _id: mongoose.Types.ObjectId(req.body.nftId),
          'nOwnedBy.address': req.body.oSeller,
        },
        {
          $set: {
            'nOwnedBy.$.quantity': parseInt(leftQty),
          },
        }
      );
    }
    //Credit the buyer
    console.log('Crediting Buyer');

    let subDocId = await NFT.exists({
      _id: mongoose.Types.ObjectId(req.body.nftId),
      'nOwnedBy.address': req.body.buyer_address,
    });
    if (subDocId) {
      console.log('Subdocument Id', subDocId);

      let _NFTB = await NFT.findOne({
        _id: mongoose.Types.ObjectId(req.body.nftId),
        'nOwnedBy.address': req.body.oBuyer,
      }).select('nOwnedBy -_id');
      console.log('_NFTB-------->', _NFTB);
      console.log(
        'Quantity found for buyers',
        _NFTB.nOwnedBy.find((o) => o.address === req.body.oBuyer.toLowerCase())
          .quantity
      );
      currentQty = _NFTB.nOwnedBy.find(
        (o) => o.address === req.body.oBuyer.toLowerCase()
      ).quantity
        ? parseInt(
            _NFTB.nOwnedBy.find(
              (o) => o.address === req.body.oBuyer.toLowerCase()
            ).quantity
          )
        : 0;
      boughtQty = req.body.oQtyBought;
      let ownedQty = currentQty + boughtQty;
      await NFT.findOneAndUpdate(
        {
          _id: mongoose.Types.ObjectId(req.body.nftId),
          'nOwnedBy.address': req.body.oBuyer,
        },
        {
          $set: {
            'nOwnedBy.$.quantity': parseInt(ownedQty),
          },
        },
        { upsert: true, runValidators: true }
      );
    } else {
      console.log('Subdocument Id not found');
      let dataToadd = {
        address: req.body.oBuyer,
        quantity: parseInt(req.body.oQtyBought),
      };
      await NFT.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.body.nftId) },
        { $addToSet: { nOwnedBy: dataToadd } },

        { upsert: true }
      );
    }

    return {
      message: 'Order updated Successfully',
      status: true,
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

exports.deleteOrder = async (req) => {
  try {
    const result = await orderModel.deleteOne({ _id: req.body.orderId });

    return {
      message: 'Order Deleted Successfully',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

exports.getOrdersByNftId = async (req) => {
  try {
    const result = await orderModel
      .find({
        nftId: req.body.nftId,
      })
      .exec();
    return {
      message: 'Order Details Using NFT ID and Status',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
