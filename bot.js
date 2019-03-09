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
    if(message.content.startsWith(prefix + "help")) {
        (message.guild.reateChannel('ticket-' + (new Array(4).join('0') + (parseInt(callback[0].case) + 1)).substr(-4), 0, 'New ticket', bot.config.category).then((channel) => {
          r.table('tickets').insert({
            id: msg.author.id,
            case: (new Array(4).join('0') + (parseInt(callback[0].case) + 1)).substr(-4),
            channel: channel.id
          }).run();
          channel.createMessage({
            embed: {
              description: 'ID: ' + (new Array(4).join('0') + (parseInt(callback[0].case) + 1)).substr(-4) + '\nMessage: ' + (args.length > 0 ? args.join(' ') : 'None')
            }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
