var request = require('request');
var _       = require('underscore');
var Q       = require('q');

function github_support() {
    'use strict';
    return;
}

github_support.prototype.get = function(prev, name) {
    'use strict';
    var source = 'https://osrc.dfm.io/';
    var deferred = Q.defer();
    var uri = source + name + '.json';
    request(uri, function(error, response, result) {
        if(result !== undefined) {
            var document = _.extend(prev, JSON.parse(result));
            deferred.resolve(document);
        } else {
            deferred.resolve({});
        }
    });
    return deferred.promise;
};

module.exports = github_support;