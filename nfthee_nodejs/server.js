// global imports
const express = require('express');
const cors = require('cors');
const path = require('path');
const flash = require("connect-flash");
const multer = require('multer')
const { connectDB } = require("./src/db/dbConnection");

const app = express();

// local import
const { credentials } = require('./src/config').constantCredentials;
const { routeNotFound, globalErrors } = require('./src/api/middlewares').ErrorHandlerMiddleware;

// pre-routes
app.use(cors());
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public/fileUpload'));
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
    }
})



exports.imageUpload = multer({ storage: storage })

// routes
require('./src/api/routes')(app);

// errors
app.use(routeNotFound);
app.use(globalErrors);

const port = credentials.PORT
connectDB();

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});