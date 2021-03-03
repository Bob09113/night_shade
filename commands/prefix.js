const Discord = require('discord.js')
const config = require('../json/con.json')
const fs = require('fs')

module.exports = {
    name: 'prefix',
    aliases: [],
    locked: false,
    perm: 'ADMINISTRATOR',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let db = require('../json/database.json');
        if(!args[0]) return message.channel.send('You must supply a new prefix')
        else{
            db.prefixes[message.guild.id] = args[0];
            message.channel.send(`${args[0]} is now the prefix for this server!`)
            fs.writeFile('./json/database.json', JSON.stringify(db), function(){})
        }
    }
}