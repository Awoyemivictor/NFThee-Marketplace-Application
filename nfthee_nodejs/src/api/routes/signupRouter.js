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
  userItems,
  userFollow,
  userUnFollow,
  addLoginToken
} = require('../controller').signupController;
const {
  Multer: { upload, uploadS3 },
} = require('../../utils');

let uploadMultiple = uploadS3.fields([
  { name: 'profile_image', maxCount: 1 },
  { name: 'banner_image', maxCount: 1 },
]);

router.post('/signup', register);
router.get('/signup/all', signupDataAll);
router.get('/signup/read', signupData);
router.get('/login/email', login);
router.post('/updateProfile', uploadMultiple, updateProfile);
router.post('/updateAddress', updateAccountAddress);
router.get('/userCollections', userCollections);
router.get('/userItems', userItems);
router.put('/userFollow', userFollow);
router.put('/userUnFollow', userUnFollow);
router.post('/addLoginToken', addLoginToken);

// router.post("/reg", SignUp)

module.exports = router;
