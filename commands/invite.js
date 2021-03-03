const Discord = require('discord.js')
let config = require('../json/con.json')

module.exports = {
    name: 'invite',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle('Night Shade Invite')
            .setColor(config.color)
            .setDescription(`**Server Invite** - https://discord.gg/kpjXMTU6Fp\n**Bot** - https://discord.com/api/oauth2/authorize?client_id=789020327678181386&permissions=8&scope=bot`)
        )
    }
}