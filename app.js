'use strict';

var fs = require('fs');
var Bot = require('node-telegram-bot');

/*understand how the bot works */
var bot = new Bot({
	token: 'Token Here'
})
.on('message', function(message){
	switch (message.text){
		case "/sendMessage":
		  bot.sendMessage({
		  	chat_id: message.chat.id,
		  	text: 'echo:' +message.text
		  });
		  break;

		case "/sendPhoto":
		  bot.sendPhoto({
		  	chat_id: message.chat.id,
		  	caption: 'trololo',
		  	files:{
		  		photo: './logo.png'
		  	}
		  });
		  break;

		case "/sendDocument":
		  bot.sendDocument({
		  	chat_id: message.chat.id,
		  	files:{
		  		filename: 'moneylove',
		  		contentType: 'audio/ogg',
		  		stream: fs.createReadStream('./0477.ogg')
		  	}
		  }, console.error);
		  break;

		case "/sendLocation":
		  bot.sendLocation({
		  	chat_id: message.chat.id,
		  	latitude: -27.121192,
		  	longitude: -109.366424,
		  	reply_to_message_id: message.message_id
		  });
		  break;
	}
})
.on('message', function(message){
	console.log(message);
})/* command without argument */
.on('test', function(message){
	bot.sendMessage({
		chat_id: message.chat.id,
		text: 'your command without args:' + command
	});
})/* command with arguments */
.on('arg', function(args, message){
	bot.sendMessage({
		chat_id: message.chat.id,
		text: 'you have sent commands:' + args
	});

})
.start();


/* set up depoio's lib --Polling+ analytics */
var bot = new Bot({ 
	token: 'Telegram Token'
}).enableAnalytics('Botan.io Token')
.on('message', function (message){
	console.log(message);
})
.on('stop', function(message){
	console.log('stop');
	bot.stop();
})
.on('start', function(message){
	bot.start();
})
.on('error', function(message){
	console.log(message);
})
.start();


/* how pure vanilla botan.io works */
var botan = require('botanio')(token);
botan.track(message, 'Start');

var uid = message.from.id;
var url = 'https://github.com';
botan.shortenUrl(uid, url, function(err, res, body){
	if(err){ console.log(err); 
	} else { console.log(body);
	}

});

