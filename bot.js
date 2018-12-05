
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
     
   module.exports = {
  doleOutPunishment: function(bot, member, guild) {
    if (!bannedUsers[guild.id]) {
      bannedUsers[guild.id] = {};
    }
    var warnings = bannedUsers[guild.id][member.id];
    if (!warnings) {
      this.warnUser(bot, member);
      bannedUsers[guild.id][member.id] = 1;
    } else if (warnings < MAX_WARNINGS) {
      this.warnUser(bot, member);
      bannedUsers[guild.id][member.id]++;
    } else if (warnings == MAX_WARNINGS) {
      this.banUser(member);
      bannedUsers[guild.id][member.id] = 0;
    }
  },

  banUser: function(member) {
    member.user.send('You have been banned for posting profanity.');
    member.ban(7).catch(console.error);
  },

  warnUser: function(bot, member) {
    bot.fetchUser(member.id).then(user => user.send('Your message has been deleted for profanity and logged.'));
  },

  checkProfanity: function(message, bannedWords) {
    var words = message.split(' ');
    for (var word of words) {
      if (bannedWords.indexOf(word) > -1) return true;
    }
    return false;
}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
