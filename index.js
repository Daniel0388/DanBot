//Uses Discord.js library

const sensitive = require("./sensitive");
const token = sensitive.token;

const Discord = require("discord.js");
var pjson = require('./package.json');
const client = new Discord.Client();

const PREFIX = '$';

//prints to cl that the bot is functioning
client.on("ready", () => {
    botName = pjson.name;
    console.log("Logged in as " + botName);
});

//if hello danbot, then hello human
client.on('message', msg => {
    if (msg.content === "Hello DanBot") {
        msg.reply("Hello Human");
    }
});


client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case "spam":
            message.channel.send("eggs");
            break;
        case "dev":
            if (args[1] === "twitter") {
                message.channel.send("https://twitter.com/dandan1496");
            } else if (args[1] === "github") {
                message.channel.send("https://github.com/Daniel0388/DanBot");
            } else {
                message.channel.send("Invalid argument");
            }
            break;
        case "info":
            if (args[1] === "version") {
                message.channel.send(pjson.version);
            } else if (args[1] === "author") {
                message.channel.send(pjson.author);
            } else {
                message.channel.send("Invalid argument");
            }
            break;
        case "roll":
            let n = -1;
            let s = -1;
            let str = args[1].split("d");
            n = parseInt(str[0]);
            s = parseInt(str[1]);
            let max = n * s;
            let min = n;
            let random = Math.floor(Math.random() * (max - min)) + min;
            message.channel.send(random);
            break;

    }

});

client.login(token);
