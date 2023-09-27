/*!
Project: Webdows
Liscense: MIT
Author: krisdb2009
File: webdows/cmd.js
*/
new explorer.window()
.title('Terminal')
.resize(500, 300)
.icon('webdows/resources/icons/scre.ico')
.center()
.callback(function() {
	var win = this;
	var body = this.body;
	body.css({'background-color':'#000','color':'white'});
	body.html('<div>EuskadiTech AxelOS [Version 6]<br>(R) EuskadiTech.<br><br></div><span>$></span><input>');
	body.find('span').attr('style', 'height:20px;width:20px;');
	body.find('input').css({'cursor':'default','font-family':'NotoSans','font-size':'16px','height':'20px','width':'calc(100% - 20px)','border':'none','box-shadow':'none','background-color':'black','color':'white'}).focus();
	var history = [];
	function push(html) {
		body.children('div').append(html);
		body.scrollTop(body[0].scrollHeight);
	}
	body.find('input').keydown(function(event) {
		var dis = $(event.target);
		if(event.which == 38) { 
			event.preventDefault();
			history.unshift(history.pop());
			dis.val(history[0]);
		}
		if(event.which == 40) {
			event.preventDefault();
			history.push(history.shift());
			dis.val(history[0]);
		}
		if(event.which == 13) {
			event.preventDefault();
			var command = $('<span>').html(dis.val()).text();
			history.push(command);
			push('<div>$>'+command+'</div>');
			if(command == 'cls') {
				body.find('div').html('');
			} else if(command == 'exit') {
				win.close();
			} else if(command.startsWith('start ')) {
				var start = command.replace('start ', '');
				system.loader(start, function(success) {
					if(!success) {
						push('<div style="color:red;">Archivo no encontrado: '+start+'</div>');
					}
				});
			} else if(command.startsWith('ping ')) {
				var host = command.replace('ping ', '');
				var sum = 0;
				function ping(cb) {
					var start = new Date().getTime();
					var finished = 0;
					var pong = 0;
					$.ajax({
						url: 'http://'+host+'/ping/',
						complete: function(){
							finished = new Date().getTime();
							pong = finished - start;
							if(pong >= 3000) {
								push('<div style="color:red;">Host no disponible...</div>');
							} else {
								push('<div>'+pong+'</div>');
							}
							setTimeout(function() {
								cb.call();
							}, 1000);
						},
						timeout: 3000
					});
				}
				ping(function() {
					ping(function() {
						ping(function() {
							
						});
					}); 
				});
			} else {
				try {
					var ret = eval(command);
				} catch(error) {
					push('<div style="color:red;">'+error+'</div>');
				} 
			}
			if(typeof ret !== 'undefined') {
				push('<div style="color:gray;">'+ret+'</div>');
			}
			dis.val('');
		}
	});
	body.click(function() {
		body.find('input').focus();
	});
});