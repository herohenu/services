var _        = require('underscore');
var jsdom    = require("jsdom");
var fs       = require('fs');
var Q        = require('q');

var jquery = fs.readFileSync("./lib/jquery-2.1.1.min.js", "utf-8");

function csdn_support() {
    'use strict';
    return;
}

csdn_support.prototype.add_blog_info = function ($, result) {
    'use strict';
    var rank = [];
    $("#blog_rank li").each(function () {
        var items = $(this).text().split("：");
        rank.push(items);
    });
    result.push(_.object(rank));
};

csdn_support.prototype.add_blog_category = function ($, result) {
    'use strict';
    var category = [];
    $("#panel_Category a").each(function () {
        if (!_.isEmpty($(this).text())) {
            category.push($(this).text());
        }
    });
    result.push(category);
};

csdn_support.prototype.add_articles = function ($, result) {
    'use strict';
    var articles = [];
    $('#hotarticls .panel_body.itemlist li').each(function () {
        articles.push({title: $(this).find('a').html(), views: $(this).find('span').html()});
    });
    result.push(articles);
};

csdn_support.prototype.get = function(name, callback){
    'use strict';
    jsdom.env({
        url: "http://blog.csdn.net/" + name,
        src: [jquery],
        done: function (errors, window) {
            var $ = window.$;
            var result = [];

            csdn_support.prototype.add_blog_info($, result);
            csdn_support.prototype.add_blog_category($, result);
            csdn_support.prototype.add_articles($, result);

            callback(result);
        }
    });
};

csdn_support.prototype.promise_get = function(prev, name){
    'use strict';
    var deferred = Q.defer();
    jsdom.env({
        url: "http://blog.csdn.net/" + name,
        src: [jquery],
        done: function (errors, window) {
            var $ = window.$;
            var result = [];

            csdn_support.prototype.add_blog_info($, result);
            csdn_support.prototype.add_blog_category($, result);
            csdn_support.prototype.add_articles($, result);

            var document = _.extend(prev, result);
            deferred.resolve(document);
        }
    });
    return deferred.promise;
};


module.exports = csdn_support;