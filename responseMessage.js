let messages = {};

module.exports = {
    setResponseMessages,
    getSuccessMessage,
    getErrorMessage
}

function setResponseMessages(successMsgs, errorMsgs) {
    messages = {successMsgs, errorMsgs};
}

function getSuccessMessage(code) {
    if(isEmpty(messages)) throw new Error('Please set error and success messages');
    if(!messages.successMsgs) throw new Error('Please set success messages');
    if(!messages.successMsgs[code]) throw new Error('Please provide valid success code');
    return messages.successMsgs[code];
}

function getErrorMessage(code) {
    if(isEmpty(messages)) throw new Error('Please set error and success messages');
    if(!messages.errorMsgs) throw new Error('Please set error messages');
    if(!messages.errorMsgs[code]) throw new Error('Please provide valid error code');
    return messages.errorMsgs[code];
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}