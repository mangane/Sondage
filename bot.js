const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('**pong!**');
  	}
    if (message.content === 'pute') {
        message.reply('attention à ton vocabulaire');
if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
messagesDeleted = messages.array(1).length; 
    }  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
