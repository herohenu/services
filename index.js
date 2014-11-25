var Information = require('./server/information');

var xunta = function(name, domain){
    'use strict';
    xunta.prototype.name = name;
    xunta.prototype.domain = domain;
};

xunta.prototype.get = function(callback){
    'use strict';
    var info = new Information(xunta.prototype.name, xunta.prototype.domain);
    info.get(function(result){
        callback(result);
    });
};

module.exports = xunta;