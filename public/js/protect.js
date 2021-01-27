layui.use('layer', function() {
	var layer = layui.layer;

	document.onkeydown = function() {
		var e = window.event || arguments[0];
		if (e.keyCode == 123) {
			layer.msg('请尊重劳动成果！', {icon: 4});
			return false;
		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
			layer.msg('请尊重劳动成果！', {icon: 4});
			return false;
		} else if ((e.ctrlKey) && (e.keyCode == 85)) {
			layer.msg('请尊重劳动成果！', {icon: 4});
			return false;
		} else if ((e.ctrlKey) && (e.keyCode == 83)) {
			layer.msg('请尊重劳动成果！', {icon: 4});
			return false;
		}
	}
	document.oncontextmenu = function() {
		layer.msg('请尊重劳动成果！', {icon: 4});
		return false;
	}
})
