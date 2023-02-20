// const { S3Client } = require('@aws-sdk/client-s3');
// global imports
const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const { credentials } = require('../config').constantCredentials;

const s3 = new aws.S3({
  region: 'ap-south-1',
  accessKeyId: credentials.AWS_ID,
  secretAccessKey: credentials.AWS_SECRET,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/fileUpload`);
  },
  filename: function (req, file, cb) {
    let exe = file.originalname.split('.').pop();
    let filename = `${Date.now()}.${exe}`;
    console.log(filename);
    cb(null, filename);
  },
});

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: credentials.AWS_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

exports.upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});
