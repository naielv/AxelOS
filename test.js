var win = new explorer.window();
var body = win.body;
body.html(`
	<progress style="
		width:calc(100% - 20px);margin:10px;
	"></progress>
	<hr>
	<input style="
		width:100%;
	" type="range">
	<button>Remove Value</button>
`);
body.find('input').on('change', function(e) {
	body.find('.progress').attr('max', 100).attr('value', $(e.target).val());
	body.find('button').click(function() {
		body.find('progress').removeAttr('value');
	});
});
