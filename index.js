var fs = require('fs');
var FormData = require('form-data');

/**
 * @param {string} filepath fs path to nuget package.
 * @param {string} host host domain name eg. www.nuget.org
 * @param {string} ApiKey nuget api key
 * @param {function} callback params: (error, response) => returned response from http.request
 * @return {ClientRequest} 
 */
module.exports = function (filepath, host, apiKey, callback) {
    var options = {
        host: host,
        path: '/api/v2/package/',
        method: 'PUT',
        headers: {
            'X-NuGet-ApiKey': apiKey,
            'user-agent': 'NuGet Command Line/3.5.0 (Microsoft Windows NT 6.2.9200.0)',
            'Accept-Language': 'en-US'
        }
    };
    var form = new FormData();
    form.append('package', fs.createReadStream(filepath));
    return form.submit(options, callback);
}