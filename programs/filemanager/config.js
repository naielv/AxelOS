/*!
Project: Web14
Liscense: MIT
Author: naielv
Date: 2024-07-07
*/


var UID1 = system.guid();
var UID2 = system.guid();
var UID3 = system.guid();
new explorer.window()
  .resize(250, 250)
  .center()
  .title('Activación')
  .icon('webdows/resources/icons/netw.ico')
  .callback(function() {
    var win = this;
    var bod = this.body;

    bod
      .css({ 'font-size': '10px', 'color': 'black', 'padding':'5px' })
      .html(`<h1>Activación de Web14</h1><p>Para activar Web14 debes tener la Clave de Producto e introducir sus detalles aquí.</p><p>Puedes comprar una nueva clave de producto oficial en <a>EuskadiTech</a></p><input type="text" placeholder="N° Licencia" id="` + UID1 + `"></input><br><i>Se usara el servidor web14.eu</i><br><strong>Se reiniciará Web14 para activar la licencia</strong><br><button id="` + UID3 + `">Activar Web14</button>`);
    document.getElementById(UID3).onclick = function() {
      system.registry.set('HKEY_LOCAL_WEBDOWS/system/files/token', document.getElementById(UID1).value)
      system.registry.set('HKEY_LOCAL_WEBDOWS/system/files/server', "https://fs.web14.eu/")
      win.close();
      location.reload(true);
    }
  });