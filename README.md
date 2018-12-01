Handle error and response at one place
===================
This library is useful for handling error and response in an abstract way.

## How to use
Let's see about js code:

First of all, we need to set error and response codes by initialising the following code in your bootstrap file i.e app.js

For that create two files, `successCodes.json` and `errorCodes.json`. Within that add success & error message in object key value format
e.g. In errorCodes.json
```js
{
    "E1001": "Something went wrong, please try again later"
}
```

Next step is to initialize these messages in bootstrap file i.e. app.js
```js
let responseHandler = require('responsehandler');

// ...
// you app.js code
// ...

responseHandler.setResponseMessages(require('./successCodes.json'), require('./errorCodes.json'));

// Note: resposeCodes and errorCodes should be in following key value format
// 'S1001': 'Processed your request successfully'
// 'E1001': 'Unable to process your request'
```

Use inside router file to handle error and response
```js
let responseHandler = require('responsehandler');

// in your routes file at the end, just call the response middleware
// ...
// your routes here
// ...
router.use(responseHandler.handleErrorResponse);
```