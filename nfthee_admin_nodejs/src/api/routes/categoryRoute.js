
const express = require('express');

const { Multer: { upload },ApiAuth: { auth } } = require('../../utils');
const router = express.Router();
const {addCategory,deleteCategory,getCategory,updateCategory, getSuggestion, deleteSuggestion} = require('../controller').categoryController;

router.post("/addCategory",auth, addCategory);
router.post("/updateCategory",auth, updateCategory);
router.get("/getCategory", auth, getCategory);
router.get("/deleteCategory", auth, deleteCategory);
router.get("/getSuggestion", auth, getSuggestion);
router.get("/deleteSuggestion", auth, deleteSuggestion);

module.exports = router;
