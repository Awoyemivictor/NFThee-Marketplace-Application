const express = require('express');
const router = express.Router();
const {
    insertHistory,
    fetchHistory,
    fetchAllHistory

} = require('../controller').historyController

 
router.post('/insertHistory', insertHistory);
router.post('/fetchHistory', fetchHistory);
router.get('/fetchAllHistory', fetchAllHistory);


module.exports = router;