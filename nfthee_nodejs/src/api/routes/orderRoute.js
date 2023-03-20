const express = require('express');

const router = express.Router();

const { createOrder, updateOrder, deleteOrder, getOrder, getOrdersByNftId } =
  require('../controller').orderController;

router.post('/createOrder', createOrder);

router.get('/getOrder', getOrder);

router.put('/updateOrder', updateOrder);

router.delete('/deleteOrder', deleteOrder);

router.post('/getOrdersByNftId', getOrdersByNftId);

module.exports = router;
