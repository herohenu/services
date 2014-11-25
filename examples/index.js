var Xunta = require('xunta-services');

var xunta = new Xunta('phodal', 'www.phodal.com');
xunta.get(function(result){
    console.log(result);
});