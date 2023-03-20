// global imports
const express = require('express');
const cors = require('cors');
const path = require('path');
const flash = require("connect-flash");
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
app.use(express.static(path.join(__dirname, '/public')));

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