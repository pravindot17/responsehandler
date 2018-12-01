let responseHandler = require('responsehandler');
let BadRequest = responseHandler.BadRequest;
let Unauthorized = responseHandler.Unauthorized;
let Forbidden = responseHandler.Forbidden;

module.exports = {
    homePage,
    checkError
}

function homePage(req, res, next, functionName) {
    let data = { title: "Error & response handler" }
    return responseHandler.createResponse(data, 'S1001');
}

function checkError(req, res, next, functionName) {
    switch(req.query.q) {
        case '1':
            throw new Unauthorized('E1001');
        case '2':
            throw new Forbidden('E1002');
        case '3':
            let err = {errDara: 'This is throwable error'};
            throw new BadRequest('E1003', err);
        default:
            throw new Error('It\'s weired')
    }
}