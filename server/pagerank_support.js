var PageRank = require('pagerank-cn');
var pagerank = new PageRank();
var Q        = require('q');

function pagerank_support() {
    'use strict';
    return;
}

pagerank_support.prototype.get = function(domain ,callback){
    'use strict';
    pagerank.countPR(domain, function(error, pageRank) {
        callback(pageRank);
    });
};

pagerank_support.prototype.promise_get = function(domain){
    'use strict';
    var deferred = Q.defer();
    pagerank.countPR(domain, function(error, result) {
        deferred.resolve(result);
    });
    return deferred.promise;
};

module.exports = pagerank_support;