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
.icon('webdows/resources/icons/fold.ico')
.callback(function() {
	var win = this;
	var bod = this.body;
	bod
	.css({'font-size':'10px', 'color': 'black'})
	.html(`<table border="0" width="100%"><thead><tr style="background-color: blue; color: white" ><th colspan="2">Nombre</th><th>Tipo</th></tr></thead><tbody id='`+UID+`'></tbody></table>`);
	filesystem.UI.buildExplorer(UID, "",  this)
});