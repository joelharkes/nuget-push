# nuget-push
> Natively in push nuget packages in nodejs.

**This package does NOT need nuget cli, no dependency outside of node!**

This package has been created for dev-ops purposes on dotnet core projects.

You could use native `dotnet pack` to create your nuget packages,
and `nuget-push` to push them to the feed. 
This way the nuget commandline tool is not needed. usefull for cross-os development


## usage
```javascript
var push = require('nuget-push');

push('MyPackage.1.0.0.nuPackage','nuget.org','MyApiKey',function(error, response){
    //errors from: https://www.npmjs.com/package/form-data.
    //for response info: https://nodejs.org/api/http.html#http_http_request_options_callback
    if(error)
        throw error;
    if(response.statusCode === 201){
        //Success
    } else {
        console.warn(response.statusCode + ":" + response.statusMessage);
        //eg: 409: Package already exists;
    }
});
```