const Discord = require('discord.js')

function capFirst(word){
    word = word.toLowerCase();
    word = word.split('');
    word[0] = word[0].toUpperCase();
    return word.join('')
}

const pokes = require('../json/creatures.json')
const config = require('../json/con.json')
const types = require('../json/types.json')


module.exports = {
    name: 'di',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        if(!args[0] || isNaN(args[0])) return message.channel.send('No tier given!')
        if(!args[1]) return message.channel.send('No pokemon given!')
        let pokem = capFirst(args.slice(1).join(' '))
        let url = pokem.toLowerCase()
        if(pokem === 'Mime jr.' || pokem === 'Mime jr'){
            pokem = 'Mime Jr.'
            url = 'mimejr'
        }
        if(pokem === 'Mr. mime' || pokem === 'Mr mime'){
            pokem = 'Mr. Mime'
            url = 'mrmime'
        }
        if(pokem === 'Ho-oh'){
            pokem = 'Ho-Oh'
            url = 'hooh'
        }
        if(pokem === 'Dialga'){
            pokem = 'Dialgae'
        }
        if(pokem === 'Dialgae'){
            url = 'dialga'
        }
        let poke = pokes[pokem];
        if(!poke || poke === null || poke === undefined) return message.channel.send('Not a valid pokemon');
        else{
            let weakness = [];
            let resistance = [];
            if(poke.types.length > 1){
                let type = {}
                for(const prop of Object.keys(types)){
                    type[prop] = types[poke.types[0]][prop] * types[poke.types[1]][prop]
                }
                for(const prop of Object.keys(type)){
                    if(type[prop] > 1){
                        weakness.push(`${prop} - ${type[prop]}`)
                    }
                    if(type[prop] < 1){
                        resistance.push(`${prop} - ${type[prop]}`)
                    }
                }
            }
            else{
                for(const prop of Object.keys(types)){
                    if(types[poke.types[0]][prop] > 1){
                        weakness.push(`${prop} - ${types[poke.types[0]][prop]}`)
                    }
                    if(types[poke.types[0]][prop] < 1){
                        resistance.push(`${prop} - ${types[poke.types[0]][prop]}`)
                    }
                }
            }
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle(`${pokem} Tier ${args[1]}`)
                .setColor('#A040A0')
                .setDescription(`No Assension: **${(parseInt(args[0])*poke.base_stats.hp)*10}**\nOne Assension: **${((parseInt(args[0])*poke.base_stats.hp)*10)*1.25}**\nTwo Assensions: **${((parseInt(args[0])*poke.base_stats.hp)*10)*1.5}**`)
                .addField('Weakness', weakness.join(', '))
                .addField('Resistance', resistance.join(', '))
                .addField('HP', poke.base_stats.hp, true)
                .addField('ATK', poke.base_stats.atk, true)
                .addField('DEF', poke.base_stats.def, true)
                .addField('SP. ATK', poke.base_stats.sp_atk, true)
                .addField('SP. DEF', poke.base_stats.sp_def, true)
                .addField('SPEED', poke.base_stats.speed, true)
                .setImage(`http://www.poke-verse.com/sprites/xyani-shiny/${url}.gif`)
            )
        }
    }
}