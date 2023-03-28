const express = require('express');
const router = express.Router();
const {
    insertReport,
    fetchReport,
    fetchAllReport,
    deleteReport

} = require('../controller').reportController

 
router.post('/insertReport', insertReport);
router.get('/fetchReport', fetchReport);
router.get('/fetchAllReport', fetchAllReport);
router.post('/deleteReport', deleteReport);



module.exports = router;