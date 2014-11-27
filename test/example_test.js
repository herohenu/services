var chai            = require("chai");
var sinon           = require("sinon");
//var nock            = require('nock');
var Q               = require("q");

var Zhihu           = require("../server/support/zhihu");

var zhihu = new Zhihu();

describe('Website Support Test', function () {
    before(function () {
        //nock('http://www.zhihu.com/people/phodal')
        //    .get('/')
        //    .delayConnection(2000)
        //    .reply(200, "")
    });

    var initVal = function (result) {
        'use strict';
        result = [];
        return result;
    };

    var zhihu_get = function(result, name){
        'use strict';
        return zhihu.get(result, name);
    };


    it('should return zhihu result of phodal', function (done) {
        //var success = sinon.spy();
        //var fail = sinon.spy();
        //var result = [];
        //Q.fcall(initVal)
        //    .then(zhihu_get)
        //    .then(function(result){
        //        console.log(result);
        //        done();
        //    });
        done();
    });
});