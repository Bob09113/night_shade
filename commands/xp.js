const Discord = require('discord.js')
const config = require('../json/con.json')
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

module.exports = {
    name: 'xp',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let num1 = args[0];
        if(!num1 || isNaN(num1)) return message.channel.send('You must give the current xp needed')
        let num2 = args[1];
        if(!num2 || isNaN(num2)) return message.channel.send('You must give the desired level yield')

        let xpCalc = parseInt(((1 - (Math.pow(1.15, parseInt(num2)))/(1 - 1.15)) * parseInt(num1)));
        let gold = numberWithCommas(parseInt(xpCalc * 2.4));

        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle('XP Required')
            .setColor(config.color)
            .setDescription(
                `**XP Needed**\n\`\`\`${xpCalc}\`\`\`\n**Gold Cost**\n\`\`\`${gold}\`\`\``
            )
        )
    }
}