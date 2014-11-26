var Xunta  = require('../index');

var xt = new Xunta('phodal', 'www.phodal.com');
xt.get(function(result){
    console.log(JSON.stringify(result));
});
