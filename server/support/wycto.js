var _        = require('underscore');
var jsdom    = require("jsdom");
var Q        = require('q');

function wycto_support() {
    'use strict';
    return;
}

wycto_support.prototype.add_blog_info = function ($, result) {
    'use strict';
    var rank = [];
    $(".infoList .modCon p").each(function () {
        var items = $(this).text().split("\n");
        rank.push(items);
    });
    console.log(_.object(rank));
    result.push(rank);
};

wycto_support.prototype.add_articles = function ($, result) {
    'use strict';
    var articles = [];
    $('.hotArt .modCon li').each(function () {
        articles.push({title: $(this).find('a').html(), views: $(this).find('span').html()});
    });
    result.push(articles);
};

wycto_support.prototype.get = function(prev, name){
    'use strict';
    var deferred = Q.defer();
    jsdom.env({
        //url: "http://" + name + ".blog.51cto.com/",
        url: "http://kinda22.blog.51cto.com/",
        scripts: ["http://code.jquery.com/jquery-2.1.1.min.js"],
        done: function (errors, window) {
            var $ = window.$;
            var result = [];

            wycto_support.prototype.add_blog_info($, result);
            wycto_support.prototype.add_articles($, result);

            var document = _.extend(prev, result);
            deferred.resolve(document);
        }
    });
    return deferred.promise;
};


module.exports = wycto_support;