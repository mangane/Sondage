const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("ready", () => {
    console.log("Connexion en cours ...");
});
client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
client.user.setActivity(`Patch de OverBot`);
});

client.on(`message`, message =>{
    if(message.content.startsWith("help")) {
        message.delete()
        message.channel.send(`${message.author.username} Salut, taper !help sûr #commande pour voir les commandes de Modérateur[Bêta]`);
        }
if (message.content.startsWith("patch")) {		
     const embed = new Discord.RichEmbed()		
     .setColor(0x954D23)		
     .setTitle("Patch")		
     .addfield("1","Le préfix du bot est Maintenant &")
     	message.channel.send({embed});
}

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
