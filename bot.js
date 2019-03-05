const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if (!message.member.haspermission('MANAGE_MESSAGE')) return message.channel.send("He he he tu n'a pas la permission petit voyoux!");
    let messageToBot = args.join(" ");
};
module.exorts.help = {
    name: 'mute'
};
message.delete().catch();
message.channel.send(messageToBot);
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
