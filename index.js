/*
    Created by Pravin Lolage on 02 Nov 2018.
*/

let errorTypes = require(`./errorTypes`);
let responseMessage = require(`./responseMessage`);
let BadRequest = errorTypes.BadRequest,
  Unauthorized = errorTypes.Unauthorized,
  AbstractError = errorTypes.AbstractError,
  Forbidden = errorTypes.Forbidden,
  NotFound = errorTypes.NotFound,
  Unavailable = errorTypes.Unavailable,
  UncaughtError = errorTypes.UncaughtError,
  FailedDependency = errorTypes.FailedDependency,
  getSuccessMessage = responseMessage.getSuccessMessage;

module.exports = {
    wrapperCall,
	handleErrorResponse,
	createResponse,
	createFailureResponse,
	...errorTypes,
	...responseMessage
}

function wrapperCall(func) {
	return async (req, res, next) => {
		let functionName = func.name;
		try {
			let response = await func.call(this, req, res, next, functionName);
			next(response);
		} catch (err) {
			if (err instanceof AbstractError) {
				return next(err)
			} else {
				return next(new UncaughtError(err, functionName));
			}
		}
	}
}

function handleErrorResponse(err, req, res, next) {
	let statusCode = 500;
	if(err instanceof AbstractError) {
		if (err instanceof BadRequest) statusCode = 400;
		else if (err instanceof NotFound) statusCode = 404;
		else if (err instanceof Forbidden) statusCode = 403;
		else if (err instanceof Unauthorized) statusCode = 401;
		else if (err instanceof Unavailable) statusCode = 503;
		else if (err instanceof FailedDependency) statusCode = 424;
		res.response = createFailureResponse(err);
	} else {
		statusCode = 200;
		res.response = err;
	}

	res.status(statusCode);
	res.json(res.response);
}

function createResponse(respData, respCode) {
	return {
		type: 'success',
		code: respCode,
		message: getSuccessMessage(respCode),
		data: respData
	}
}

function createFailureResponse(err) {
	return {
		type: 'error',
		code: err.code,
		message: err.message || 'Oops, something went wrong!',
		data: err.errData || err
	}
}