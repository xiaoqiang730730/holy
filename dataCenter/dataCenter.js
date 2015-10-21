;(function(win,$){
	if(Object.observe){
		// holy.init(win.test);
	}else{
		return;
	}
	var dataSource = [];
	var dataTarget = [];
	var dataMap = {

	};
	var holy = {

		init: function(){
			this.$app = $('[ho-app=init]');
			this.$source = this.$app.find('[ho-src]');
			this.$target = this.$app.find('[ho-tar]');
			dataMap[this.$source.attr('ho-src')] = this.$source.val();
			this.start(dataMap);
			this.eventBind();
		},
		eventBind: function(){
			var _this = this;
			$('[ho-src]').on('input', function(){
				dataMap[$(this).attr('ho-src')] = $(this).val();
			});
		},
		start: function(model){
			var _this = this;
			Object.observe(model, function(changes){
				console.log(changes);
				// 这个异步毁掉函数将会运行
				changes.forEach(function(change) {
					// 让我们获知变化
					$(_this.$app.find('[ho-tar='+change.name+']')).text(model[change.name]);
					console.log(change.type, change.name, model[change.name], change.oldValue||'');
				});
			});
		}
	};
	holy.init();
	window.holy = window.holy || holy;
})(window,jQuery);