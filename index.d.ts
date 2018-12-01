// Type definitions for Responsehandler
// Project: https://github.com/pravindot17/responsehandler.git
// Definitions by: Pravin Lolage <https://github.com/pravindot17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'responsehandler'

export function wrapperCall(func: Function): Promise<any>
export function handleErrorResponse(err: any, req: any, res: any, next: Function): any
export function createResponse(respData: Object, respCode: String): Object
export function createFailureResponse(err: Error): Object

export function AbstractError(msg, code, errData, functionName, constr): null
export function BadRequest(code: String, errData: Object, functionName: String): null
export function Unauthorized(code: String, errData: Object, functionName: String): null
export function Forbidden(code: String, errData: Object, functionName: String): null
export function NotFound(code: String, errData: Object, functionName: String): null
export function Unavailable(code: String, errData: Object, functionName: String): null
export function UncaughtError(errData: Object, functionName: String): null
export function FailedDependency(errData: Object, functionName: String): null

export function setResponseMessages(successMsgs: Object, errorMsgs: Object): null

