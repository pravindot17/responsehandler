let util = require('util');
let getErrorMessage = require(`./responseMessage`).getErrorMessage;
module.exports = {
    AbstractError,
    BadRequest,
    Unauthorized,
    NotFound,
    Forbidden,
    Unavailable,
    UncaughtError,
    FailedDependency
}

function AbstractError(msg, code, errData, functionName, constr) {
	Error.captureStackTrace(this, constr || this);
	this.code = code || null;
	this.message = msg || '';
	this.errData = errData || {};
	this.functionName = functionName || '';
}

util.inherits(AbstractError, Error);
AbstractError.prototype.name = 'AbstractError';


function BadRequest(code, errData, functionName) {
    this.name = 'BadRequest'
    let msg = getErrorMessage(code);
    BadRequest.super_.call(this, msg, code, errData, functionName, this.constructor);
}
util.inherits(BadRequest, AbstractError);


function Unauthorized(code, errData, functionName) {
    this.name = 'Unauthorized'
    let msg = getErrorMessage(code);
    Unauthorized.super_.call(this, msg, code, errData, functionName, this.constructor);
}
util.inherits(Unauthorized, AbstractError);


function Forbidden(code, errData, functionName) {
    this.name = 'Forbidden';
    let msg = getErrorMessage(code);
    Forbidden.super_.call(this, msg, code, errData, functionName, this.constructor);
}
util.inherits(Forbidden, AbstractError);


function NotFound(code, errData, functionName) {
    this.name = 'NotFound';
    let msg = getErrorMessage(code);
    NotFound.super_.call(this, msg, code, errData, functionName, this.constructor);
}
util.inherits(NotFound, AbstractError);


function Unavailable(code, errData, functionName) {
    this.name = 'Unavailable';
    let msg = getErrorMessage(code);
    Unavailable.super_.call(this, msg, code, errData, functionName, this.constructor);
}
util.inherits(Unavailable, AbstractError);


function UncaughtError(errData, functionName) {
    this.name = 'UncaughtError'
    UncaughtError.super_.call(this, 'Oops! Something went wrong.', 500, errData, functionName, this.constructor);
}
util.inherits(UncaughtError, AbstractError);


function FailedDependency(errData, functionName) {
    this.name = 'FailedDependency'
    FailedDependency.super_.call(this, 'External service threw an error', 424, errData, functionName, this.constructor);
}
util.inherits(FailedDependency, AbstractError);