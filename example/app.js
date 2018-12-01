let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');

let indexRouter = require('./routes/index');
let responseHandler = require('responsehandler');
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// initialize response messages
responseHandler.setResponseMessages(require('./config/successCodes.json'), require('./config/errorCodes.json'));

app.use('/', indexRouter);

module.exports = app;
