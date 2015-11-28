;(function(HO){
    if(!HO){
        window.holy = HO = {};
    }
    if(!HO.event){
        HO.event = {};
    }
    function ctrls(params){
        var fn,i;
        fn = function(opts) {
            if (this.init) {
                return this.init(opts);
            }
            return this;
        };
        for(i in params) {
            fn.prototype[i] = params[i];
        };
        return fn;
    }
    HO.event = {
        _dataEventList: {},
        sub: function(name, callback){ // 订阅
            var list = this._dataEventList;
            list[name] = callback;
        },
        pub: function(name, params){ // 派发
            var list = this._dataEventList;
            var func = list[name];
            func(params);
        }
    };
})(window.holy);