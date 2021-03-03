const Discord = require('discord.js')
const config = require('../json/con.json')

module.exports = {
    name: 'help',
    aliases: ['commands'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let db = require('../json/database.json');
        let prefix = db.prefixes[message.guild.id] || config.prefix
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle('Night Shade Commnads')
            .setColor(config.color)
            .addField(
                `General Commnads`,
                `**${prefix}add <#> <#>** - Add two numbers together\n**${prefix}divide <#> <#>** - Divide one number by a second number\n**${prefix}multiply <#> <#>** - Multiply two numbers together\n**${prefix}power <#> <#>** - Return a number to the power of another number\n**${prefix}sqrt <#>** - Get the square root of a number\n**${prefix}subtract <#> <#>** - Subtract the second number from the first\n**${prefix}remind <time> <reminder>** - Get reminded of something`
            )
            .addField(
                `Pokeverse Utility`,
                `**${prefix}di <tier> <pokemon>** - View some info on a dynamax raid\n**${prefix}flare <member>** - View some info on a Team Flare member\n**${prefix}magma <member>** - View some info on a Team Magma member\n**${prefix}xp <xp needed> <desired levels>** - Calculate the xp needed to achieve a desired level`
            )
            .addField(
                `API Commands`,
                `**${prefix}avatar {member}** - View a member's avatar\n**${prefix}de {member}** - View a member's DE\n**${prefix}devils {member}** - View a member's devil badges\n**${prefix}dust {member}** - View a member's femrare dust\n**${prefix}gems {member}** - View a member's gems\n**${prefix}gold {member}** - View a member's gold\n**${prefix}pokeballs {member}** - View a member's pokeballs\n**${prefix}redeems {member}** - View a member's redeems\n**${prefix}selected {member}** - View a member's selected team\n**${prefix}zcrystals {member}** - View a member's zcrystals`
            )
            .addField(
                `Other`,
                `**${prefix}help** - Display this embed\n**${prefix}settings {setting} {enable/disable}** - Enable or disable viewing of your info`
            )
        )
    }
}