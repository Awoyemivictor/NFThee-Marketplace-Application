const express = require('express');
const router = express.Router();
const {
    insertHistory,
    fetchHistory,
    fetchAllHistory,
    fetchUserHistory

} = require('../controller').historyController

 
router.post('/insertHistory', insertHistory);
router.post('/fetchHistory', fetchHistory);
router.get('/fetchAllHistory', fetchAllHistory);
router.get('/fetchUserHistory', fetchUserHistory);




module.exports = router;