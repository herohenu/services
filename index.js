var Github   = require('./server/github_support');
var CSDN     = require('./server/csdn_support');
var PR       = require('./server/pagerank_support');
var Alexa    = require('./server/alexa_support');
var Zhihu    = require('./server/zhihu_support');

var async    = require('async');

var gs    = new Github();
var csdn  = new CSDN();
var pr    = new PR();
var alexa = new Alexa();
var zhihu = new Zhihu();

var response = [];

var name = 'phodal';
var domain = 'http://www.' + name + '.com';

var next = function(result) {
    'use strict';
    response.push(result);
};

gs.promise_get(name).then(function(result){
    'use strict';
    response.push(result);
    pr.promise_get(domain);
}).
    then(pr.promise_get(domain)).then(function(result){
        'use strict';
        response.push(result);
        console.log(response);
    });

async.parallel([
    function () {
        'use strict';
        pr.get(domain, next);
    },

    function () {
        'use strict';
        gs.get(name, next);
    },

    function () {
        'use strict';
        csdn.get(name, next);
    },

    function () {
        'use strict';
        zhihu.get(name, next);
    },

    function () {
        'use strict';
        alexa.get(domain, next);
    }
]);