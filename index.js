var Github   = require('./server/github_support');
var PageRank = require('pagerank-cn');
var fs       = require('fs');
var jsdom    = require("jsdom");
var _        = require('underscore');

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
        var result = [];
        var rank =[];
        $("#blog_rank li").each(function () {
            rank.push($(this).text().split("："));
        });
        result.push(_.object(rank));

        var category = [];
        $("#panel_Category a").each(function () {
            if(!_.isEmpty($(this).text())) {
                category.push($(this).text());
            }
        });
        result.push(category);

        $('#hotarticls .panel_body.itemlist li').each(function () {
            result.push({article:$(this).find('a').html(), views:$(this).find('span').html()});
        });
        console.log(result);
    }
});
