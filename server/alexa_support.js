var alexa    = require('alexarank');
var Q        = require('q');

function alexa_support() {
    'use strict';
    return;
}

alexa_support.prototype.get = function (domain, callback) {
    'use strict';
    alexa(domain, function(error, result) {
        callback(result);
    });
};

alexa_support.prototype.promise_get = function (domain) {
    'use strict';
    var deferred = Q.defer();
    alexa(domain, function(error, result) {
        deferred.resolve(result);
    });
    return deferred.promise;
};

module.exports = alexa_support;