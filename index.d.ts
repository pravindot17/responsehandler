// Type definitions for Responsehandler
// Project: https://github.com/pravindot17/responsehandler.git
// Definitions by: Pravin Lolage <https://github.com/pravindot17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'responsehandler'

export function wrapperCall(func: Function): Promise<any>
export function handleErrorResponse(err: Any, req: Any, res: Any, next: Function): any
export function createResponse(respData: Object, respCode: String): Object
export function createFailureResponse(err: Error): Object

export function AbstractError(msg, code, errData, functionName, constr): Null
export function BadRequest(code: String, errData: Object, functionName: String): Null
export function Unauthorized(code: String, errData: Object, functionName: String): Null
export function Forbidden(code: String, errData: Object, functionName: String): Null
export function NotFound(code: String, errData: Object, functionName: String): Null
export function Unavailable(code: String, errData: Object, functionName: String): Null
export function UncaughtError(errData: Object, functionName: String): Null
export function FailedDependency(errData: Object, functionName: String): Null

export function setResponseMessages(successMsgs: Object, errorMsgs: Object): Null

