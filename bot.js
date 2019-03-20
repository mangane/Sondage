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
client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
client.user.setActivity(`La Nation Bot`);
client.on(`message`, message =>{
if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
            return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
        if(message.mentions.users.size === 0)
            return message.channel.send("Vous avez oublié de mention la personne à exclure !");
        const member = message.mentions.members.first();
        message.channel.send(`${message.mentions.users.first()} à été Kické par ${message.author.username}`);
        member.kick();
}
if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
            return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
        if(message.mentions.users.size === 0)
            return message.channel.send("Vous avez oublié de mention la personne à exclure !");
        const member = message.mentions.members.first();
        message.channel.send(`${message.mentions.users.first()} à été banni par ${message.author.username}`);
        member.ban(); 
}
   }); 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN)
