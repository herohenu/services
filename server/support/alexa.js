var alexa    = require('alexarank');
var Q        = require('q');
var _        = require('underscore');

function alexa_support() {
    'use strict';
    return;
}

alexa_support.prototype.get = function (prev, domain) {
    'use strict';
    var deferred = Q.defer();
    alexa(domain, function(error, result) {
        var document = _.extend(prev, result);
        deferred.resolve(document);
    });
    return deferred.promise;
};

module.exports = alexa_support;