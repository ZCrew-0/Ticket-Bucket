const { mongoose }=require('./api/functions/dbconnection.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path  = require('path');

var userController = require('./api/controllers/user/userController.js');
var loginController = require('./api/controllers/login/loginUserController');

const port = process.env.PORT ||4201;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log('Server started at port :'+ port));

app.use('/user', userController);
app.use('', loginController);
