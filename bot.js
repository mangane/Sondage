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
if(message.content.startsWith(prefix + "patch")) {
    message.delete()
     const embed = new Discord.RichEmbed()		
     .setColor(0x954D23)		
     .setTitle("Patch OverBot")		 
     .addField("changement du prefix","le préfix est maintenant &");
     message.channel.send({embed})
}

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
