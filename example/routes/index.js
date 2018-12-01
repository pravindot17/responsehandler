let express = require('express');
let router = express.Router();
let wrapperCall = require('responsehandler').wrapperCall;
let handleErrorResponse = require('responsehandler').handleErrorResponse;
let NotFound = require('responsehandler').NotFound;
let homeCtrl = require('../controller/homeCtrl');

/* GET home page. */
router.get('/', wrapperCall(homeCtrl.homePage));
router.get('/error', wrapperCall(homeCtrl.checkError));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    throw new NotFound('E1004');
});

router.use(handleErrorResponse);
module.exports = router;
