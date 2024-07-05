/*!
Project: Webdows
Liscense: MIT
Author: krisdb2009
Date: 03/20/16
File: webdows/welcome.js
*/
new explorer.window()
.title('Bienvenid@ a Web14')
.resize(570, 300)
.center()
.icon('webdows/resources/icons/logo.png')
.controls(['min'])
.callback(function() {
	var butts = [
		{
			text: 'Sobre...',
			icon: 'webdows/resources/icons/info.ico',
			callback: function() {
				system.loader('webdows/webver.js');
			}
		}, {
			text: 'EuskadiTech',
			icon: 'webdows/resources/icons/balg.svg',
			callback: function() {
				system.error("El ejecutable 'open-website' no existe.")
			}
		}
	];
	var body = this.body;
	body.css({'padding-top':'100px','text-align':'center','overflow-x':'hidden'});
	body.html('<div class="topframe"><div class="welc">Bienvenid@</div><div class="stat">Web14</div></div>');
	$.each(butts, function() {
		var buttID = system.guid();
		body.append('<button buttID="'+buttID+'" class="butt"><span style="background-image:url(\''+this.icon+'\');" class="icon"></span>'+this.text+'</button>');
		body.find('button[buttID='+buttID+']').click(this.callback);
	});
	body.find('.topframe').attr('style', 'top:0px;left:0px;background-repeat:no-repeat;background-size:100px 100px, 100% 100%;position:absolute;height:100px;width:100%;background-image:url(\'webdows/resources/welcome/2.png\'), url(\'webdows/resources/welcome/1.png\');');
	body.find('.welc').attr('style', 'color:rgba(255,255,255,0.5);font-size:40px;position:absolute;bottom:0px;right:10px;');
	body.find('.stat').attr('style', 'white-space:nowrap;text-align:left;font-size:12px;margin-top:5px;margin-left:110px;color:white;text-shadow:1px 1px 3px black;');
	body.find('.butt').attr('style', 'line-height:32px;margin:5px;height:35px;width:100px;');
	body.find('.icon').css({'width':'30px','height':'30px','float':'left'});
});
