const Discord = require('discord.js')
const config = require('../json/con.json')
const embeds = require('../json/flare.json')

module.exports = {
    name: 'flare',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let selector = args[0];
        if(!selector) return message.channel.send(new Discord.MessageEmbed(embeds.MEMBERS))
        else{
            selector = selector.toLowerCase();
            if(selector === 'a'){
                message.channel.send(new Discord.MessageEmbed(embeds.GRUNTA))
            }else if(selector === 'b'){
                message.channel.send(new Discord.MessageEmbed(embeds.GRUNTB))
            }else if(selector === 'printer'){
                message.channel.send(new Discord.MessageEmbed(embeds.PRINTER))
            }else if(selector === 'malva'){
                message.channel.send(new Discord.MessageEmbed(embeds.MALVA))
            }else if(selector === 'alain'){
                message.channel.send(new Discord.MessageEmbed(embeds.ALAIN))
            }else if(selector === 'essentia'){
                message.channel.send(new Discord.MessageEmbed(embeds.ESSENTIA))
            }else{
                message.channel.send(new Discord.MessageEmbed(embeds.MEMBERS))
            }
        }
    }
}