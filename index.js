//	****
//	*
//	*

//Uses Discord.js library

// token = NjM0NjA0Njg0NzUyOTc3OTIw.Xak7uA.cA1OnUjRBVo4L9jshQZWt83pKAA
// permission integer = 8
// client ID = 634604684752977920
//link to add bot to server = https://discordapp.com/oauth2/authorize?client_id=634604684752977920&scope=bot&permissions=0

const sensitive = require("./sensitive");
const token = sensitive.token

const Discord = require("discord.js");
var pjson = require('./package.json');
const client = new Discord.Client();

//const token = "NjM0NjA0Njg0NzUyOTc3OTIw.Xak7uA.cA1OnUjRBVo4L9jshQZWt83pKAA";

const PREFIX = '$'

//prints to cl that the bot is functioning
client.on("ready", () => {
	botName = "DanBot";
	console.log("Logged in as " + botName);
});
	
//if hello danbot, then hello human
client.on('message', msg=> {
	if (msg.content === "Hello DanBot"){
			msg.reply("Hello Human");
	};
});


client.on('message', message => {
	let args = message.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case "spam": //case is a glorified if else statement
			//message.reply("eggs"); //reply will @ the user that called it
			message.channel.send("eggs"); //send does not @ users
			break;
		case "website":
			message.channel.send("https://twitter.com/dandan1496");
			break;
		case "info":
			if (args[1] === "version") {
				message.channel.send(pjson.version);
			} else if (args[1] === "author") {
				message.channel.send(pjson.author);
			} else {
				message.channel.send("Invalid argument");
			};
			break;
		case "roll":
				var n = -1; //number of dice
				var s = -1; // number of sides on dice
				//message.channel.send(args[1]);
				var str = args[1].split("d");
				//message.channel.send("[0] = " + str[0]);
				//message.channel.send("[1] = " + str[1]);
				n = parseInt(str[0]);
				s = parseInt(str[1]);
				var max =  n * s; //highest number possible
				var min = n; //lowest number possible
				var random = Math.floor(Math.random() * (max - min)) + min;
				message.channel.send(random);
			break;
			
	};
});

client.login(token); //log the bot in


