$('head').find('title').text('Web14');
explorer.start.append([], [
  {
    title: 'Web14',
    icon: 'webdows/resources/icons/ques.ico',
    callback: function() { system.loader('webdows/webver.js'); }
	}, {
    title: 'Ajustes',
    icon: 'webdows/resources/icons/cont.ico'
	}, {
    title: 'Este Equipo',
    icon: 'webdows/resources/icons/scre.ico',
    callback: function() { system.loader("programs/filemanager/filemanager.js"); },
    context: [
      {
        title: '<b>Abrir</b>',
        icon: 'webdows/resources/icons/driv.ico',
        callback: function() { system.loader("programs/filemanager/filemanager.js"); }
      }, {}, {
        title: 'Propiedades',
        callback: function() { system.loader('webdows/system.js'); }
			}
		]
	}, {
    title: 'Personalizar',
    icon: 'webdows/resources/icons/pers.ico',
    callback: function() { system.loader('webdows/personalize.js'); }
	}, {
    title: 'Bienvenid@',
    icon: 'webdows/resources/icons/logo.png',
    callback: function() { system.loader('webdows/welcome.js'); }
	}, {
    title: 'Reiniciar',
    callback: function() { location.reload(true); }
	}
]);
$('#desktop.explorer').on('contextmenu', function(e) {
  e.preventDefault();
  if (e.target == this) {
    new explorer.context()
      .location(e.pageX, e.pageY)
      .append([
        {
          title: 'Ver'
			}, {
          title: 'Ordenar Por'
			}, {
          title: 'Recargar'
			}, {}, {
          title: 'Nuevo',
          context: [
            {
              title: 'Archivo',
              callback: function() {}
					}, {}, {
              title: 'Carpeta',
              callback: function() {}
					}
				]
			}, {}, {
          title: 'webver.js',
          icon: 'webdows/resources/icons/info.ico',
          callback: function() { system.loader('webdows/webver.js'); }
			}, {
          title: 'Personalizar',
          icon: 'webdows/resources/icons/pers.ico',
          callback: function() { system.loader('webdows/personalize.js'); }
			}
		]);
  }
});