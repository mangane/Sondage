const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('**pong!**');
  	}
    if (message.content === '!voca') {
        message.channel.send('attention a ton vocabulaire {@user}');
    }  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
