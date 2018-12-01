let express = require('express')
let mockApp = express();
let bodyParser = require('body-parser')
let responseHandler = require('responsehandler')

mockApp.use(bodyParser.json());
mockApp.use(bodyParser.urlencoded({ extended: true }));

responseHandler.setResponseMessages(require('../config/successCodes.json'), require('../config/errorCodes.json'));
mockApp.use('/', require('../routes/index'));

mockApp
  .listen(8010)
  .on('listening', function () { console.log(`Started MockApp, PID:${process.pid}, PORT:8010 `); })
