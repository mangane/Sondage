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
    if (message.content.startsWith(prefix + "hep")) {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Liste des commandes :")
		.addField("!help", "Affiche les commandes")
		.addField("!info", "Donne des informations sur le bot")
		.addField("!invite", "Donne le lien pour me faire joindre votre serveur")
		.addField("!mute", "Permer d'interdire à un membre de parler")
		.addField("!unmute", "Retire l'interdiction de parler")
		message.channel.send({embed})
	}
    
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
