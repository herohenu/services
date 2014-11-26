var PageRank = require('pagerank-cn');
var _        = require('underscore');
var Q        = require('q');

var pagerank = new PageRank();

function pagerank_support() {
    'use strict';
    return;
}

pagerank_support.prototype.get = function(prev, domain){
    'use strict';
    var deferred = Q.defer();
    pagerank.countPR(domain, function(error, result) {
        if(result === undefined) {
            result = {};
        }
        var formatResult = {"pageRank": result};
        var document = _.extend(prev, formatResult);
        deferred.resolve(document);
    });
    return deferred.promise;
};

module.exports = pagerank_support;