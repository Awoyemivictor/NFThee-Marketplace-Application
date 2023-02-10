const express = require('express');
const router = express.Router();
const {
    insertLikes,

} = require('../controller').likesController


router.post('/insertlikes', insertLikes);



module.exports = router;