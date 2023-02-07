// global imports
const multer = require('multer');
const path = require('path')

/**
 * @middleware multer storage
 * @description set storage location for multer
 * @author Rinku sain
 */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log("typename>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",req.body)
        cb(null, `public/fileUpload`)
    },
    filename: function(req, file, cb) {
        let exe = (file.originalname).split(".").pop();
        let filename = `${Date.now()}.${exe}`;
        cb(null, filename)
    }
});

/**
 * @middleware multer upload
 * @description upload file for multer
 * @author Rinku sain
 */
exports.upload = multer({
        storage: storage,
        
        fileFilter: (req, file, cb) => {


                // if (req.body.typename == "musicUpload/mp3") {
                //     if (file.mimetype == "audio/mpeg") {
                cb(null, true);
                // } else {
                //     req.fileValidationError = "Only .mp3 format allowed!";

                // }
                // return cb(null, false, req.fileValidationError);

            }
            // else {
            //     if (
            //         file.mimetype == "image/png" ||
            //         file.mimetype == "image/jpg" ||
            //         file.mimetype == "image/jpeg") {
            //         cb(null, true);
            //     } else {

        //         req.fileValidationError = "Only .png, .jpg and .jpeg format allowed!";
        //     }

        //     return cb(null, false, req.fileValidationError);
        // }
    }
    // }
);
