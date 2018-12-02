const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
const cmdName = 'lmgtfy';
const description = 'lets me google that for you.';

function execute (cmd) {
  cmd.parameter
  ? cmd.reply(`http://lmgtfy.com/?q=${cmd.args.join('+')}`)
  : cmd.reply('http://lmgtfy.com/?q=how+to+use+lmgtfy');
}

module.exports = {
  cmdName,
  description,
  execute,
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
