var PageRank = require('pagerank-cn');
var pagerank = new PageRank();

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

module.exports = pagerank_support;