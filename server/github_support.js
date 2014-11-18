var request = require('request');

function github_support(name){
    'use strict';
    this.name = name;
}

github_support.prototype.get = function() {
    var uri = 'https://osrc.dfm.io/' + this.name + '.json';
    request(uri, function(error, response, body) {
            console.log(body);
            console.log(response.headers['content-type']);
        })
};

module.exports = github_support;