const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Help - Displays Help Menu\n${config.prefix}Poll <Question>\n${config.prefix}Prefix <New Prefix> - Sets New Prefix. **[BOT OWNER ONLY${config.prefix}]**`)

}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
