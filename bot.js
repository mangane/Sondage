
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply("**pong!**");
  	}
    if (message.content === "pute") {
        message.reply('attention à ton vocabulaire');
    }
    if (message.content === 'salope') {
        message.reply("parle sur un autre ton dis donc :thumbsdown:");
    }  
    if (message.content === '!info') {
        message.channel.sendMessage("```information sur le bot :``` Bonjour/bonsoir je m'appel ``Protecteur`` Je suis un bot qui va demander aux personnes sur votres serveurs qui parle mal de parler mieux ```mon créateur c'est : ``` Bonne journée/rsoiée :)");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
