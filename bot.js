const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('**pong!**');
  	}
    if (message.content === '!Voca') {
        message.channel.send('attention a ton vocabulaire member.mention');
    }  
if(message.author.bot) { return; }

if(!message.mentions.members.array()[2]){ return; }

message.author.send(`Please stop mass mentioning.`)

numberofmentions++;

if(numberofmentions > 3){
  message.member.kick();
  message.author.send(`You've Been Kicked From ${message.guild} for Spamming Mentions.`);
  message.channel.send(`User ${message.author.username}#${message.author.discriminator} Has Been Kicked For Mass Mentinoing`);
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
