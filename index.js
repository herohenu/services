var Information = require('./server/information');

var name = 'phodal';
var domain = 'http://www.' + name + '.com';

var info = new Information(name, domain);
info.get(function(result){
    'use strict';
    console.log(result);
});