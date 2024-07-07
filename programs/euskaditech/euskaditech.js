/*!
Project: Web14
Liscense: MIT
Author: naielv
Date: 2024-07-07
*/
new explorer.window()
.resize(640, 480)
.center()
.title('EuskadiTech')
.icon('programs/euskaditech/logo.ico')
.callback(function() {
	var win = this;
	this.body
	.css({'font-size':'10px'})
	.html(`
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
<style>
*       {margin:0;padding:0;}
html, 
body    {height:100%;  width:100%; overflow:hidden;}
table   {height:100%;  width:100%; table-layout:static; border-collapse:collapse;}
iframe  {float:left; height:100%; width:100%;}
.header {border-bottom:1px solid #000}
.content {height:100%;}
</style>
</head>
<body>

<table>
  <tr>
      <td class="content">
      <iframe src="programs/euskaditech/index.html" frameborder="0"></iframe>
    </td>
  </tr>
</table>

</body>
</html>
		`);
});