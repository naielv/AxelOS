/*!
Project: Web14
Liscense: MIT
Author: naielv
Date: 2024-07-07
*/
new explorer.window()
.resize(640, 480)
.center()
.title('Archivos')
.icon('programs/filemanager/logo.ico')
.callback(function() {
	var win = this;
	var bod = this.body;
	bod
	.css({'font-size':'10px'})
	.html(`<div id='filebrowserd'></div>`);
	bod.find('div#filebrowserd').html("hehe")
});