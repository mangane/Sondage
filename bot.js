const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("ready", () => {
    console.log("Connexion en cours ...");
});

client.on(`message`, message =>{
    if(message.content.startsWith("help")) {
        message.channel.send("Salut, taper !help sûr #commande pour voir les commandes de Modérateur[Bêta]");
        }
    if (message.content.startsWith(prefix + "kick")) {
        if (message.member.roles.find('name', 'Wielder')) {
            let sub = message.content.substring(config.prefix.length+5);
            let args = sub.split(" ");
            let userToKick = message.mentions.users.first();
            var reason = sub.substring(args[0].length+1);
            message.guild.member(userToKick).kick();
            message.guild.channels.find('name', 'mod-log').sendMessage("**User has felt the power of Hammer!** \n**User that was kicked**: " + userToKick + "\n**Reason**: " + reason + "\n**Date**: " + today + "\n**Time of Action**: " + time + "\n**Responsible Wielder**: " + message.author + "\n**Channel**: " + message.channel.name);
        }
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
