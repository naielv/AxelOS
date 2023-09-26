/*!
Project: Webdows
Liscense: MIT
Author: krisdb2009
Date: 03/14/16
File: webdows/notepad.js
*/
new explorer.window()
.title('Bloc de notas')
.icon('webdows/resources/icons/note.ico')
.resize(500, 300)
.center()
.callback(function() {
	var bod = this.body;
	var win = this;
	var bar = [
		{
			title: 'Archivo',
			context: [
				{
					title: 'Nuevo'
				}, {
					title: 'Abrir...'
				}, {
					title: 'Guardar'
				}, {}, {
					title: 'Imprimir...',
					callback: function() {
						var text = bod.find('textarea').val();
						var pre = $('<pre></pre>').html(text).attr('style', 'margin:0;display:block;background-color:white;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1010').appendTo('#desktop.explorer');
						window.print();
						pre.remove();
					}
				}, {}, {
					title: 'Salir',
					callback: function() { win.close(); }
				}
			]
		}, {
			title: 'Editar',
			context: [
				{
					title: 'Deshacer'
				}, {}, {
					title: 'Cortar'
				}, {
					title: 'Copiar'
				}, {
					title: 'Pegar'
				}, {
					title: 'Eliminar'
				}, {}, {
					title: 'Buscar...'
				}, {}, {
					title: 'Selecionar Todo'
				}, {
					title: 'Fecha/Hora'
				}
			]
		}, {
			title: 'Formato',
			context: [
				{
					title: 'Ajuste automatico'
				}
			]
		}, {
			title: 'Ayuda',
			context: [
				{
					title: 'Sobre Bloc de notas',
					callback: function() { system.loader('webdows/webver.js'); }
				}
			]
		}
	];
	this.menuBar(bar);
	bod.html('<textarea></textarea>');
	bod.find('textarea').attr('style', 'overflow:scroll;top:0px;left:0px;position:absolute;border:0;margin:0;width:100%;height:100%;margin:0;padding:0;resize:none;');
});