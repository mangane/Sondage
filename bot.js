const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
var kick = message.guild.member(message.mentions.users.first());

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
    if(message.content.startsWith(prefix + "kick")) {
       const member = message.mentions.members.first();
   message.channel.send(`${message.mentions.users} à été Kické par ${message.author.username}`)
        member.kick();
   }
    
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
