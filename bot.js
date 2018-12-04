
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
         await message.delete(1);
        message.reply("parle sur un autre ton dis donc :thumbsdown:");
    }  
    
    if (message.content === '!info') {
        message.channel.sendMessage("```information sur le bot :``` Bonjour/bonsoir je m'appel ``Protecteur`` Je suis un bot qui va demander aux personnes sur votres serveurs qui parle mal de parler mieux ```mon créateur c'est : ``` ``j'allais oublier ma version : V1`` Bonne journée/soirée :)");
    }
    
    if (message.content === 'con') {
        message.reply('__insulté est mauvais pour la santé__')
    }
    client.on("message", message => {
  if (message.content.startsWith('!poll')) {
  const poll = message.content.substring(5);
      if (poll.lenght === 0) {
         message.reply("Vous n'avez pas mis de question");
      }
  message.delete(1);
  const pollembed = new Discord.RichEmbed()
  .setTitle("StrawPoll")
  .setColor("#5599ff")
  .setDescription(`${poll}`)
  .setFooter(`StrawPoll de ${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.send(pollembed)
  .then(async function (message) {
    await message.react("✅")
    await message.react("❌")
    await message.react("🤷")
    });
  }
});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
