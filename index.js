var Github   = require('./server/support/github');
var CSDN     = require('./server/support/csdn');
var PR       = require('./server/support/pagerank');
var Alexa    = require('./server/support/alexa');
var Zhihu    = require('./server/support/zhihu');

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

