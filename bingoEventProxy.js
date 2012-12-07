function eventProxy(){
    this.evs = {};
    this.finalargs = [];
}

eventProxy.prototype.todo = function(){
    var args = [].slice.call(arguments);
    this.finalCallBack = args[args.length-1];
    for(var i=0;i<args.length-1;i++){
        this.evs[args[i]] = {
            triggered:false,
            index:i
        }
    }
}
eventProxy.prototype.destory = function(){
    this.evs = {};
    this.finalargs = [];
	delete this.finalCallBack;
}
eventProxy.prototype.trigger = function(eventname,data){
    var self = this;
    this.evs[eventname].triggered = true;
    var alldone = true,finalargs = this.finalargs;
    finalargs[this.evs[eventname].index] = data;
    for(var p in this.evs){
        if(!this.evs[p].triggered){
            alldone = false;
			break;
        }
    }
   alldone && this.finalCallBack.apply(null,finalargs);
}

module.exports = eventProxy;