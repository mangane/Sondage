const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("message", message => {
 if message.content('!commandes) {
                    message.channel.sendMessage('__les commandes du bot : __ ```!poll [Arguments] ( pour cree un sondage)``` ```!commandes (pour voir les commandes disponnibles)```); }
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
  message.channel.sendMessage(pollembed)
  .then(async function (message) {
    await message.react("✅")
    await message.react("❌")
    await message.react("🤷") 
  }); 
  } 
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
