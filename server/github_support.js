var request = require('request');
var _       = require('underscore');

function github_support() {
    'use strict';
    this.result    = [];
    this.response  = [];
}

github_support.prototype.get = function(name, callback) {
    //var source = 'https://osrc.dfm.io/';
    var source = 'http://0.0.0.0:10000/';
    var uri = source + name + '.json';
    request(uri, function(error, response, body) {
        this.result = body;
        callback(body);
    });
};

github_support.prototype.on = function (result) {
    this.result = result;
    if(_.isEmpty(result)) {
        throw new Error("no this id");
    }
    return this;
};

github_support.prototype.add_avatar = function () {
    _.extend(this.response, {"avatar" : JSON.parse(this.result).avatar});
    return this;
};

github_support.prototype.add_connected_users = function () {
    _.extend(this.response, {"connected_users": JSON.parse(this.result).connected_users});
    return this;
};

github_support.prototype.add_name = function () {
    _.extend(this.response, {"name": JSON.parse(this.result).name});
    return this;
};

github_support.prototype.add_repositories = function () {
    _.extend(this.response, {"repositories": JSON.parse(this.result).repositories});
    return this;
};

github_support.prototype.add_events = function () {
    _.extend(this.response, {"events": JSON.parse(this.result).usage.events});
    return this;
};

github_support.prototype.add_day_hours = function () {
    _.extend(this.response, {"day_hours": JSON.parse(this.result).usage.day});
    return this;
};

github_support.prototype.add_similar_users = function () {
    _.extend(this.response, {"similar_users": JSON.parse(this.result).usage.similar_users});
    return this;
}
github_support.prototype.add_languages = function () {
    _.extend(this.response, {"languages": JSON.parse(this.result).usage.languages});
    return this;
};

github_support.prototype.build = function () {
    return this.response;
};

module.exports = github_support;