const Discord = require('discord.js')
const config = require('../json/con.json')

module.exports = {
    name: 'sqrt',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let num1 = parseInt(args[0])
        if(!num1 || isNaN(num1)) return message.channel.send('Must supply a number')
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`√${num1}`)
            .setColor(config.color)
            .setDescription(Math.sqrt(parseInt(num1)))
        )
    }
}