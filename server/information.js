var Github   = require('./support/github');
var CSDN     = require('./support/csdn');
var PR       = require('./support/pagerank');
var Alexa    = require('./support/alexa');
var Zhihu    = require('./support/zhihu');

var github    = new Github();
var csdn  = new CSDN();
var pr    = new PR();
var alexa = new Alexa();
var zhihu = new Zhihu();

var Information = function(name, domain){
    'use strict';
    Information.prototype.name = name;
    Information.prototype.domain = domain;
};

Information.prototype.get = function (callback) {
    'use strict';
    var response = [];
    var name = Information.prototype.name;
    var domain = Information.prototype.domain;
    github.promise_get(response, name)
        .then(function (result) {
            'use strict';
            return pr.promise_get(result, domain);
        })
        .then(function (result) {
            'use strict';
            return csdn.promise_get(result, name);
        })
        .then(function (result) {
            'use strict';
            return zhihu.promise_get(result, name);
        })
        .then(function (result) {
            'use strict';
            return alexa.promise_get(result, domain);
        })
        .then(function (result) {
            'use strict';
            callback(result);
        });
};

module.exports = Information;


