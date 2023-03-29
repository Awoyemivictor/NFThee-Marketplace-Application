const express = require('express');
const router = express.Router();
const {
    userReport,
    fetchUserReport,
    fetchAllUserReport,
    deleteUserReport,
} = require('../controller').reportedUserController

router.post('/userReport', userReport);
router.get('/fetchUserReport', fetchUserReport);
router.get('/fetchAllUserReport', fetchAllUserReport);
router.post('/deleteUserReport', deleteUserReport);



module.exports = router;