var Github   = require('./server/github_support');
var CSDN     = require('./server/csdn_support');
var PR       = require('./server/pagerank_support');
var Alexa    = require('./server/alexa_support');

var async    = require('async');

var gs    = new Github();
var csdn  = new CSDN();
var pr    = new PR();
var alexa = new Alexa();

var response = [];

var next = function(result) {
    'use strict';
    response.push(result);
};

async.parallel([
    function () {
        'use strict';
        pr.get('http://www.phodal.com/', next);
    },

    function () {
        'use strict';
        gs.get('phodal', next);
    },

    function () {
        'use strict';
        csdn.get('phodal', next);
    },

    function () {
        'use strict';
        alexa.get('http://www.phodal.com', next);
    }

]);