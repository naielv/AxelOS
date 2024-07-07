/*!
Project: Web14
Liscense: MIT
Author: naielv
Date: 2024-07-07
*/

var UID = system.guid();
new explorer.window()
.resize(350, 480)
.center()
.title('Archivos')
.icon('programs/filemanager/logo.ico')
.callback(function() {
	var win = this;
	var bod = this.body;
	bod
	.css({'font-size':'10px'})
	.html(`<table><thead><tr><th colspan="2">Nombre</th><th>Tipo</th></tr></thead><tbody border="1" id='`+UID+`'></tbody></table>`);
	load_folder(UID, "")
});