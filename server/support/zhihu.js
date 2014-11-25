var _        = require('underscore');
var jsdom    = require("jsdom");
var fs       = require('fs');
var Q        = require('q');

var jquery = fs.readFileSync("./lib/jquery-2.1.1.min.js", "utf-8");

function zhihu_support() {
    'use strict';
    return;
}

zhihu_support.prototype.add_user_agree = function ($, result) {
    'use strict';
    var agree_number = $(".zm-profile-header-user-agree").find('strong').text();
    result.push({agree: agree_number});
};

zhihu_support.prototype.add_user_thanks = function ($, result) {
    'use strict';
    var thanks_number = $(".zm-profile-header-user-agree").find('strong').text();
    result.push({thanks: thanks_number});
};

zhihu_support.prototype.add_good_zone = function ($, result) {
    'use strict';
    var skilledTopics = [];
    $(".zg-gray-darker").each(function() {
        skilledTopics.push({domain: $(this).html()});
    });
    result.push({skilledTopics: skilledTopics});
};

zhihu_support.prototype.get = function(name, callback){
    'use strict';
    jsdom.env({
        url: "http://www.zhihu.com/people/" + name,
        src: [jquery],
        done: function (errors, window) {
            var $ = window.$;
            var result = [];

            zhihu_support.prototype.add_user_agree($, result);
            zhihu_support.prototype.add_user_thanks($, result);
            zhihu_support.prototype.add_good_zone($, result);

            callback(result);
        }
    });

};

zhihu_support.prototype.promise_get = function(prev, name){
    'use strict';
    var deferred = Q.defer();
    jsdom.env({
        url: "http://www.zhihu.com/people/" + name,
        src: [jquery],
        done: function (errors, window) {
            var $ = window.$;
            var result = [];

            zhihu_support.prototype.add_user_agree($, result);
            zhihu_support.prototype.add_user_thanks($, result);
            zhihu_support.prototype.add_good_zone($, result);

            var document = _.extend(prev, result);
            deferred.resolve(document);
        }
    });
    return deferred.promise;
};


module.exports = zhihu_support;