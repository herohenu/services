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

var next = function(result) {
    'use strict';
    response.push(result);
};

async.parallel([
    function () {
        'use strict';
        pr.get('http://www.' + name + '.com', next);
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
        alexa.get('http://www.' + name + '.com', next);
    }

]);