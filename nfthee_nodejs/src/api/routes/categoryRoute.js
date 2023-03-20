
const express = require('express');
const { Multer: { upload } } = require('../../utils');

const router = express.Router();
const {addCategory,deleteCategory,getCategory,updateCategory} = require('../controller').categoryController;

router.post("/addCategory",   addCategory);
router.post("/updateCategory", updateCategory);
router.get("/getCategory",  getCategory);
router.get("/deleteCategory",  deleteCategory);
module.exports = router;
