const express = require('express');
const router = express.Router();
const {
    insertSubsription,
   

} = require('../controller').subscriptionController


router.post('/emailSubsription', insertSubsription);




module.exports = router;