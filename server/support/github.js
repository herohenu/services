var request = require('request');
var _       = require('underscore');
var Q       = require('q');

function github_support() {
    'use strict';
    this.result    = [];
    this.response  = [];
}

github_support.prototype.get = function(name, callback) {
    'use strict';
    var source = 'https://osrc.dfm.io/';
    var uri = source + name + '.json';
    request(uri, function(error, response, body) {
        this.result = body;
        callback(body);
    });
};

github_support.prototype.promise_get = function(prev, name) {
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