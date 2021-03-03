const Discord = require('discord.js')
const config = require('../json/con.json')

module.exports = {
    name: 'multiply',
    aliases: ['mult'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let num1 = parseInt(args[0])
        let num2 = parseInt(args[1])
        if(!num1 || isNaN(num1)) return message.channel.send('Must supply a number')
        if(!num2 || isNaN(num2)) return message.channel.send('Must supply a second number')
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`${num1}*${num2}`)
            .setColor(config.color)
            .setDescription(parseInt(num1)*parseInt(num2))
        )
    }
}