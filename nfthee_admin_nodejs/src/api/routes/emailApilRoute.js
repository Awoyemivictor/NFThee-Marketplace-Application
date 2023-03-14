const express = require('express');

const { createEmail, readEmail, readAllEmail, updateEmail, deleteEmail } = require('../controller').emailApiController;

const { ApiAuth: { auth } } = require('../../utils');
const route = express.Router()

// route.post("/addEmail", auth, createEmail);
route.post("/addEmail", createEmail);
route.get("/readEmail", auth, readEmail);
route.get("/AllEmail", auth, readAllEmail);
route.post("/updateEmail", auth, updateEmail);
route.post("/deleteEmail", auth, deleteEmail);


module.exports = route;