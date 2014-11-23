var _        = require('underscore');
var jsdom    = require("jsdom");
var fs       = require('fs');

var jquery = fs.readFileSync("./lib/jquery-2.1.1.min.js", "utf-8");

function csdn_support() {
    'use strict';
    return;
}

csdn_support.prototype.add_user_agree = function ($, result) {
    'use strict';
    var agree_number = $(".zm-profile-header-user-agree").find('strong').text();
    result.push({agree: agree_number});
};

csdn_support.prototype.add_user_thanks = function ($, result) {
    'use strict';
    var thanks_number = $(".zm-profile-header-user-agree").find('strong').text();
    result.push({thanks: thanks_number});
};

csdn_support.prototype.add_good_zone = function ($, result) {
    'use strict';
    var skilledTopics = [];
    $(".zg-gray-darker").each(function() {
        skilledTopics.push({domain: $(this).html()});
    });
    result.push({skilledTopics: skilledTopics});
};

csdn_support.prototype.get = function(name, callback){
    'use strict';
    jsdom.env({
        url: "http://www.zhihu.com/people/phodal",
        src: [jquery],
        done: function (errors, window) {
            var $ = window.$;
            var result = [];

            console.log(result);

            csdn_support.prototype.add_user_agree($, result);
            csdn_support.prototype.add_user_thanks($, result);
            csdn_support.prototype.add_good_zone($, result);

            callback(result);
        }
    });

};

module.exports = csdn_support;