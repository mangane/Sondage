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
        message.delete()
        message.channel.send(`${message.author.username} Salut, taper !help sûr #commande pour voir les commandes de Modérateur[Bêta]`);
        }
    if(message.content.startsWith(prefix + "say")) {
        message.channel.send("${args.join}")
        }
    
    Client.on("guildMemberAdd", member => {
   member.guild.defaultChannel.send("Welcome to: " + member.guild.name + " Hope you enjoy it here")
});

Client.on("guildMemberRemove", member => {
   member.guild.defaultChannel.send("Goodbye: " + member.user.username + " from " + member.guild.name)
});
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
