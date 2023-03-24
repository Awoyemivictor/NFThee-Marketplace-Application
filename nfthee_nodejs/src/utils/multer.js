// const { S3Client } = require('@aws-sdk/client-s3');
// global imports
const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const { credentials } = require('../config').constantCredentials;
const inputFormat = 'jpeg';
const outputFormat = 'avif';
const options = { quality: 100 };
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



// exports.uploadS3 = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: credentials.AWS_BUCKET_NAME,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   }),
// });
const transformFile = (fileBuffer, outputFormat, options) => {
  return sharp(fileBuffer)
    .toFormat(outputFormat, options)
    .toBuffer();
};

// exports.uploadS3 = multer({
  
//   storage: multerS3({
//     s3: s3,
//     bucket: credentials.AWS_BUCKET_NAME,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       const fileNameWithoutExt = path.parse(file.originalname).name;
//       cb(null, `${fileNameWithoutExt}.${outputFormat}`);
//     },
//     transformer: function (req, file, cb) {
//       transformFile(file.buffer, outputFormat, options)
//         .then(buffer => cb(null, buffer))
//         .catch(err => cb(err));
//     },
//   }),
// });

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: credentials.AWS_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const fileNameWithoutExt = path.parse(file.originalname).name;
      const fileExt = path.parse(file.originalname).ext;
      let outputExt;

      if (fileExt === '.gif') {
        outputExt = 'webp';
      } else if (fileExt === '.mp4') {
        outputExt = 'webp';
      } else if (fileExt === '.svg') {
        outputExt = 'svg';
      } else {
        outputExt = 'avif';
      }

      cb(null, `${fileNameWithoutExt}.${outputExt}`);
    },
    transformer: function (req, file, cb) {
      const fileExt = path.parse(file.originalname).ext;
      let outputFormat;

      if (fileExt === '.gif') {
        outputFormat = 'webp';
      } else if (fileExt === '.mp4') {
        outputFormat = 'webp';
      } else if (fileExt === '.svg') {
        outputFormat = 'svg';
      } else {
        outputFormat = 'avif';
      }

      transformFile(file.buffer, outputFormat, options)
        .then(buffer => cb(null, buffer))
        .catch(err => cb(err));
    },
  }),
});

exports.upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});
