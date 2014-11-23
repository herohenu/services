var alexa    = require('alexarank');

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

module.exports = alexa_support;