const express = require('express');
const router = express.Router();

const {
  register,
  login,
  signupData,
  updateProfile,
  signupDataAll,
  loginOne,
  updateAccountAddress,
  userCollections,
  userItems
} = require('../controller').signupController;
const {  
  Multer: { upload },
} = require('../../utils');

let uploadMultiple = upload.fields([
  { name: 'profile_image', maxCount: 1 },
  { name: 'banner_image', maxCount: 1 },
]);

router.post('/signup', register);
router.get('/signup/all', signupDataAll);
router.get('/login/email', login);
router.post('/updateProfile', uploadMultiple, updateProfile);
router.post('/updateAddress', updateAccountAddress);
router.get('/userCollections', userCollections);
router.get('/userItems', userItems);

// router.post("/reg", SignUp)

module.exports = router;
