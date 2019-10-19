
//	 ________  ________  ________   ________  ________  _________   
//	|\   ___ \|\   __  \|\   ___  \|\   __  \|\   __  \|\___   ___\ 
//	\ \  \_|\ \ \  \|\  \ \  \\ \  \ \  \|\ /\ \  \|\  \|___ \  \_| 
//	 \ \  \ \\ \ \   __  \ \  \\ \  \ \   __  \ \  \\\  \   \ \  \  
//	  \ \  \_\\ \ \  \ \  \ \  \\ \  \ \  \|\  \ \  \\\  \   \ \  \ 
//	   \ \_______\ \__\ \__\ \__\\ \__\ \_______\ \_______\   \ \__\
//	    \|_______|\|__|\|__|\|__| \|__|\|_______|\|_______|    \|__|

                                                                
/*
  MIT License

Copyright (c) 2019 Daniel Vargas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */                                                          



//	 _________  ________          ________  ________          
//	|\___   ___\\   __  \        |\   ___ \|\   __  \  ___    
//	\|___ \  \_\ \  \|\  \       \ \  \_|\ \ \  \|\  \|\__\   
//	     \ \  \ \ \  \\\  \       \ \  \ \\ \ \  \\\  \|__|   
//	      \ \  \ \ \  \\\  \       \ \  \_\\ \ \  \\\  \  ___ 
//	       \ \__\ \ \_______\       \ \_______\ \_______\|\__\
//	        \|__|  \|_______|        \|_______|\|_______|\|__|
// ADD !HELP !COMMANDS !DANBOT 
// REMOVE CASE SENSITIVITY
// ALL COMMANDS NEED TO BE CONVERTED TO LOWERCASE BEFORE BEING PASSED INTO THE SWITCH
                                                        
                                                      
                                                          
                                                             


//Uses Discord.js
//Uses node.js
// start running with "node ." in command line

const sensitive = require("./sensitive");
const strings = require("./strings");
const token = sensitive.token

const Discord = require("discord.js");
var pjson = require('./package.json');
const client = new Discord.Client();

const PREFIX = '$'

//prints to cl that the bot is functioning
client.on("ready", () => {
	botName = pjson.name;
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
	switch(args[0].toLowerCase()){
		case "danbot": //switch is a glorified if else statement
			//message.reply("eggs"); //reply will @ the user that called it
			//message.channel.send("eggs"); //send does not @ users
			message.channel.send(strings.title2, {code: 'md'});
			message.channel.send(strings.commands);
			break;
		case "dev":
			if (args[1].toLowerCase() === "twitter") {
				message.channel.send("https://twitter.com/dandan1496");
			} else if (args[1].toLowerCase() === "github") {
				message.channel.send("https://github.com/Daniel0388/DanBot");
			} else {
				message.channel.send("Invalid argument");
			};
			break;
		case "info":
			if (args[1].toLowerCase() === "version") {
				message.channel.send(pjson.version);
			} else if (args[1].toLowerCase() === "author") {
				message.channel.send(pjson.author);
			} else {
				message.channel.send("Invalid argument");
			};
			break;
		case "roll":
				var n = -1; //number of dice
				var s = -1; // number of sides on dice
				var str = args[1].split("d");
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


