const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();
client.on('message', message => {
if (message.content === prefix + "new") {
        let role = message.guild.roles.find('name', "@Support")
        let role2 = message.guild.roles.find('name', "@Mods")
        let role3 = message.guild.roles.find('name', "@Admin")
      if (message.channel.id === "614211761461133342") {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setDescription("Choisissez le sujet de votre question\n🏪 = Pub Mp\n💸= Candidature\n 🌱 = Question\n 🔧 = Suggestion ")
        const facturation = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Pub MP")
            .setDescription("Un comportement suspect que vous aimeriez signaler à notre équipe")

        const commercial = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Candidature")
            .setDescription("Donne moi ta candidature ici")

        const recrutement = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Question")
            .setDescription("Avez-vous des questions générales sur Discord ou des problèmes")

        const tech = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Suggestion")
            .setDescription("Aide nous à améliore notre discord")
        message.guild.createChannel("Ticket-" + message.author.username, "text")
            .then(c => {
                c.overwritePermissions(message.author, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
              c.overwritePermissions(role, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
          c.overwritePermissions(role2, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
          c.overwritePermissions(role3, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
                c.overwritePermissions(message.guild.id, {
                    VIEW_CHANNEL: false
                })
               
                c.send(message.author, embed).then(async data => {
                data.react("💸")
                await data.react("🏪")
                await data.react("🌱")
                await data.react("🔧")
                    .then(ok => {
                        const msgreact = data.createReactionCollector((reaction, user) => user.id === message.author.id);
                        msgreact.on("collect", async (reaction) => {
                            if (reaction.emoji.name === "💸") { //menu d'aide
                                reaction.remove(message.author.id);
                                data.edit(facturation)
                                data.clearReactions()
                            } else {
                                if (reaction.emoji.name === "🏪") { //menu d'aide
                                    reaction.remove(message.author.id);
                                    data.edit(commercial)
                                    data.clearReactions()
                                } else {
                                    if (reaction.emoji.name === "🌱") { //menu d'aide
                                        reaction.remove(message.author.id);
                                        data.edit(recrutement)
                                        data.clearReactions()
                                    } else {
                                        if (reaction.emoji.name === "🔧") { //menu d'aide
                                            reaction.remove(message.author.id);
                                            data.edit(tech)
                                            data.clearReactions()
                                        }
                                    }
                                }
                            }
                        })
                    })
            })
          
        })
    } else {
      message.channel.send("Merci d'utiliser cette commande dans <#614211761461133342>")
    }}
    if (message.content === prefix + "close") {
        if (message.channel.name.startsWith("ticket-")) {
            message.channel.delete()
        } else {
            message.channel.send("Impossible de fermer ce ticket")
        }
    }
})
client.login("NTE1NTYzMjkyNDI1NDUzNTg4.XV8MKw.6MRzpPNFKicg48kQ2TtrPh4N5rA")