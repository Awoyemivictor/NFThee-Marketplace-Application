const express = require("express");
const {
  Multer: { upload, uploadS3 },
  ApiAuth: { auth },
} = require("../../utils");

const router = express.Router();
const {
  addVerification,
  getVerification,
  createPageToken,
  getAllVerification,
  deleteVerification,
} = require("../controller").verificationController;

let uploadMultiple = uploadS3.fields([
  { name: "art_draft", maxCount: 1 },
  { name: "project_banner", maxCount: 1 },
  { name: "project_icon", maxCount: 1 },
  { name: "project_logo", maxCount: 1 },
]);

// router.post("/addPartner",auth, uploadMultiple, addPartner);
router.post("/addVerification", uploadMultiple, addVerification);
router.post("/getAllVerification", getAllVerification);
router.post("/getVerification", getVerification);
router.post("/createPageToken", createPageToken);
router.post("/deleteVerification", deleteVerification);
module.exports = router;
