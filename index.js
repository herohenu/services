var Github   = require('./server/github_support');
var CSDN     = require('./server/csdn_support');
var PR       = require('./server/pagerank_support');
var alexa = require('alexarank');

var gs   = new Github();
var csdn = new CSDN();
var pr   = new PR();

gs.get('phodal', function (result) {
    'use strict';
    console.log(result);
});

pr.get('http://www.phodal.com/blog', function(result){
    'use strict';
    console.log(result);
});

alexa("http://www.phodal.com/", function(error, result) {
    'use strict';
    console.log(result);
});

csdn.get('phodal', function(result){
    'use strict';
    console.log(result);
});