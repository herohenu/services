var Github   = require('./server/github_support');
var PageRank = require('pagerank-cn');
var fs       = require('fs');
var jsdom    = require("jsdom");
var request  = require('request');

var gs = new Github();

gs.get('phodal', function (result) {
    'use strict';
    fs.writeFile("./generator/config.json", '{ "locals": ', function(err) {
        if(err) {
            console.log(err);
        }
    });

    fs.appendFile("./generator/config.json", result + ",", function(err) {
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
        fs.appendFile("./generator/config.json", '"alexa":' + JSON.stringify(result) + "}", function(err) {
            if(err) {
                console.log(err);
            }
        });
    } else {
        console.log(error);
    }
});

var jquery = fs.readFileSync("./lib/jquery-2.1.1.min.js", "utf-8");

jsdom.env({
    url: "http://blog.csdn.net/phodal",
    src: [jquery],
    done: function (errors, window) {
        'use strict';
        var $ = window.$;
        $("#blog_rank").each(function () {
            console.log($(this).text());
        });
    }
});
