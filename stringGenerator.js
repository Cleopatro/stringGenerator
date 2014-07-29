Array.prototype.toStrGen=function(originStr){
	if(Object.prototype.toString.call(originStr).slice(8,-1)==="Array"){
		return this.map(function(i){
			return originStr.join(i);
		}).reduce(function(m,n){return m+n+'\b'}, "");
	}
};