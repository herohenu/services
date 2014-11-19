var Github   = require('./server/github_support');
var PageRank = require('pagerank-cn');

var gs = new Github();
gs.get('phodal', function (result) {
    'use strict';
    var response = gs.on(result)
        .add_avatar()
        .add_connected_users()
        .add_name()
        .add_repositories()
        .add_languages()
        .add_events()
        .add_day_hours()
        .add_similar_users()
        .build();

    console.log(response);
});

var pagerank = new PageRank('http://www.phodal.com/blog');

pagerank.countPR('http://www.phodal.com/blog', function(error, pageRank) {
    'use strict';
    console.log(pageRank);
});

var alexa = require('alexarank');

alexa("http://www.phodal.com/", function(error, result) {
    'use strict';
    if (!error) {
        console.log(JSON.stringify(result));
    } else {
        console.log(error);
    }
});