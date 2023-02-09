const express = require('express');

const {
  Multer: { upload },
  ApiAuth: { auth },
} = require('../../utils');
const router = express.Router();
const {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
  getSuggestion,
  deleteSuggestion,
} = require('../controller').categoryController;

router.post('/addCategory', addCategory);
router.post('/updateCategory', updateCategory);
router.get('/getCategory', getCategory);
router.get('/deleteCategory', deleteCategory);
router.get('/getSuggestion', getSuggestion);
router.get('/deleteSuggestion', deleteSuggestion);

module.exports = router;
