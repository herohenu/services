var Github   = require('./server/github_support');
var CSDN     = require('./server/csdn_support');
var PR       = require('./server/pagerank_support');
var Alexa    = require('./server/alexa_support');
var Zhihu    = require('./server/zhihu_support');

var github    = new Github();
var csdn  = new CSDN();
var pr    = new PR();
var alexa = new Alexa();
var zhihu = new Zhihu();

var name = 'phodal';
var domain = 'http://www.' + name + '.com';

var response = [];

github.promise_get(response, name)
    .then(function(result){
        'use strict';
        return pr.promise_get(result, domain);
    })
    .then(function(result){
        'use strict';
        return csdn.promise_get(result, name);
    })
    .then(function(result){
        'use strict';
        return zhihu.promise_get(result, name);
    })
    .then(function(result){
        'use strict';
        return alexa.promise_get(result, domain);
    })
    .then(function(result){
        'use strict';
        console.log(result);
    });

