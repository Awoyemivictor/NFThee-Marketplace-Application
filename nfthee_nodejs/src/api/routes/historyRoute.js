const express = require('express');
const router = express.Router();
const {
    insertHistory,
    fetchHistory,

} = require('../controller').historyController

 
router.post('/insertHistory', insertHistory);
router.post('/fetchHistory', fetchHistory);


module.exports = router;