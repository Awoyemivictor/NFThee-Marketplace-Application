
const express = require('express');
const { Multer: { upload },ApiAuth: { auth } } = require('../../utils');


const router = express.Router();
const {submitSuggestion} = require('../controller').suggestionController;

// router.post("/submitSuggestion", auth, submitSuggestion);
router.post("/submitSuggestion", submitSuggestion);

module.exports = router;