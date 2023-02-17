const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "images/");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

module.exports = multer({storage, fileFilter})