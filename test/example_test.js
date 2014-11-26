var chai            = require("chai");
var sinon           = require("sinon");
var Q               = require("q");
var Zhihu           = require("../server/support/zhihu");

var zhihu = new Zhihu();

describe('Website Support Test', function () {
    before(function () {

    });

    it('should return zhihu result of phodal', function (done) {
        var success = sinon.spy();
        var fail = sinon.spy();
        var result = [];

        done();
    });
});