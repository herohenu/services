var Github   = require('./server/github_support');
var PageRank = require('pagerank-cn');
var fs       = require('fs');

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

    fs.writeFile("./generator/config.json", '{ "locals": ', function(err) {
        if(err) {
            console.log(err);
        }
    });

    fs.appendFile("./generator/config.json", "{" + '"github":' + JSON.stringify(response) + ",", function(err) {
        if(err) {
            console.log(err);
        }
    });
});

var pagerank = new PageRank('http://www.phodal.com/blog');

pagerank.countPR('http://www.phodal.com/blog', function(error, pageRank) {
    'use strict';
    fs.appendFile("./generator/config.json", '"pagerank":' + pageRank  + ",", function(err) {
        if(err) {
            console.log(err);
        }
    });
});

var alexa = require('alexarank');

alexa("http://www.phodal.com/", function(error, result) {
    'use strict';
    if (!error) {
        fs.appendFile("./generator/config.json", '"alexa":' + JSON.stringify(result) + "}}", function(err) {
            if(err) {
                console.log(err);
            }
        });
    } else {
        console.log(error);
    }
});
