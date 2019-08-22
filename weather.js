const Discord = require("discord.js");
const weather = require("weather-js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {


    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
        if (err) message.channel.send(err);

        // We also want them to know if a place they enter is invalid.
        if (result.length === 0) {
            message.channel.send('**Entrez une localisation valide.**') // This tells them in chat that the place they entered is invalid.
            return; // This exits the code so the rest doesn't run.
        }

        // Variables
        var current = result[0].current; // This is a variable for the current part of the JSON output
        var location = result[0].location; // This is a variable for the location part of the JSON output

        // Let's use an embed for this.
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
            .setAuthor(`Méteo de ${current.observationpoint}`) // This shows the current location of the weather.
            .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
            .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
            .addField('Zone horaire',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
            .addField('Type de degrés',location.degreetype, true)// This is the field that shows the degree type, and is inline
            .addField('Temperature',`${current.temperature} Degrés`, true)
            .addField('Température resentie', `${current.feelslike} Degrés`, true)
            .addField('Vent',current.winddisplay, true)
            .addField('Humiditée', `${current.humidity}%`, true)

            // Now, let's display it when called
            message.channel.send({embed});
    });
}

module.exports.config = {
    name: "weather",
    aliases: ["méteo", "meteo", "temps"],
    usage: ".weather <ville>",
    description : "Donne la méteo de la ville demandée."
  }
