var eventProxy = require('bingoEvent');

var ep = new eventProxy();

function finalCallBack(v1data,v2data,v3data){
	console.log(v1data,v2data,v3data);//{v1data:'v1data'}v2data['v3data']
}

ep.todo('v1','v2','v3',finalCallBack);

setTimeout(function(){
	ep.trigger('v1',{v1data:'v1data'})
},5000);
setTimeout(function(){
	ep.trigger('v2','v2data');
},2000);
setTimeout(function(){
	ep.trigger('v3',['v3data'])
},3000);