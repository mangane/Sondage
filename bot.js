
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
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
  message.channel.sendMessage(pollembed)
  .then(async function (message) {
    await message.react("✅")
    await message.react("❌")
    await message.react("🤷")
    });
  }
    if (message.content.startsWith('salope')) {
        message.delete(1);
        message.reply("change de vocabulaire merci!"); }
    if (message.content.startsWith('!commandes')) {
        message.delete(1);
        message.reply(" voici la liste des commandes : ```!poll ``` ```!commandes```"); }
    
   if (message.content.startsWith
	'warn'): (message) => {
		const mentionedUser = message.mentions.users.first();
		let  args = message.content.split(mentionedUser).slice(1);
		message.reply("Warned " + message.mentions.users.first() + ".\nHis ID is: " + message.mentions.users.first().id + " you can use this on the bot's website to check if the user has any warns")
		mentionedUser.sendMessage("You got warned by Warnbot \nOn server " + message.guild.name + " by " + message.author.username + "\nReason : " + args.join(" "))
		console.log('[C] ' + message.author.username + ' Warned ' + message.mentions.users.first() + ' On ' + message.guild.name)
		var warn = {
			"user": "" + message.author.username + "",
			"discord_id": "" + message.mentions.users.first().id + "",
			"reason": "" + args.join(" ") + "",
      			"serverName": "" + message.guild.name + "",
}
     
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
