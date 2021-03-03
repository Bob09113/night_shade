const Discord = require('discord.js')
const config = require('../json/con.json')

module.exports = {
    name: 'flare',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let selector = args[0];
        if(!selector) return message.channel.send('Flare Members: A, B, Printer')
        else{
            selector = selector.toLowerCase();
            if(selector === 'a'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Team Flare Grunt A')
                    .setColor(config.color)
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816227254999842816/Hawlucha.gif')
                    .addField('1. Houndour - DARK/FIRE', '__**Affected By:**__\nFighting: 2, Ground: 2, Rock: 2, Water: 2\n__**Base Stats:**__\n**HP:** 45 | **ATK:** 60\n**DEF:** 30 | **SP:** 80\n**SDEF:** 50 | **SPD:** 65')
                    .addField('2. Tyrunt - ROCK/DRAGON', '__**Affected By:**__\nFighting: 2, Ground: 2, Steel: 2, Ice: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 58 | **ATK:** 89\n**DEF:** 77 | **SP:** 45\n**SDEF:** 45 | **SPD:** 48')
                    .addField('3. Swalot - POISON', '__**Affected By:**__\nGround: 2, Psychic: 2\n__**Base Stats:**__\n**HP:** 100 | **ATK:** 73\n**DEF:** 83 | **SP:** 73\n**SDEF:** 83 | **SPD:** 55')
                    .addField('4. Noibat - FLYING/DRAGON', '__**Affected By:**__\nRock: 2, **Ice: 4**, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 40 | **ATK:** 30\n**DEF:** 35 | **SP:** 45\n**SDEF:** 40 | **SPD:** 55')
                    .addField('5. Spritzee - FAIRY', '__**Affected By:**__\nPoison: 2, Steel: 2\n__**Base Stats:**__\n**HP:** 78 | **ATK:** 52\n**DEF:** 60 | **SP:** 64\n**SDEF:** 65 | **SPD:** 23')
                    .addField('6. Hawlucha - FIGHTING/FLYING', '__**Affected By:**__\nFlying: 2, Electric: 2, Psychic: 2, Ice: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 78 | **ATK:** 92\n**DEF:** 75 | **SP:** 74\n**SDEF:** 63 | **SPD:** 118')
                )
            }else if(selector === 'b'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Team Flare Grunt B')
                    .setColor(config.color)
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816227206455885825/Jolteon.gif')
                    .addField('1. Goomy - DRAGON', '__**Affected By:**__\nIce: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 45 | **ATK:** 50\n**DEF:** 35 | **SP:** 55\n**SDEF:** 75 | **SPD:** 40')
                    .addField('2. Espurr - PSYCHIC', '__**Affected By:**__\nBug: 2, Ghost: 2, Dark: 2\n__**Base Stats:**__\n**HP:** 62 | **ATK:** 48\n**DEF:** 54 | **SP:** 63\n**SDEF:** 60 | **SPD:** 68')
                    .addField('3. Amoonguss - GRASS/POISON', '__**Affected By:**__\nFlying: 2, Fire: 2, Psychic: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 114 | **ATK:** 85\n**DEF:** 70 | **SP:** 85\n**SDEF:** 80 | **SPD:** 30')
                    .addField('4. Liepard - DARK', '__**Affected By:**__\nFighting: 2, Bug: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 64 | **ATK:** 88\n**DEF:** 50 | **SP:** 88\n**SDEF:** 50 | **SPD:** 106')
                    .addField('5. Drapion - POISON/DARK', '__**Affected By:**__\nGround: 2\n__**Base Stats:**__\n**HP:** 70 | **ATK:** 90\n**DEF:** 110 | **SP:** 60\n**SDEF:** 75 | **SPD:** 95')
                    .addField('6. Jolteon - ELECTRIC', '__**Affected By:**__\nGround: 2\n__**Base Stats:**__\n**HP:** 65 | **ATK:** 65\n**DEF:** 65 | **SP:** 110\n**SDEF:** 95 | **SPD:** 130')
                )
            }else if(selector === 'printer'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Team Flare Chief Printer')
                    .setColor(config.color)
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816227270095667200/Greninja.gif')
                    .addField('1. Spinda - NORMAL', '__**Affected By:**__\nGhost: 2\n__**Base Stats:**__\n**HP:** 60 | **ATK:** 60\n**DEF:** 60 | **SP:** 60\n**SDEF:** 60 | **SPD:** 60')
                    .addField('2. Spewpa - BUG', '__**Affected By:**__\nFlying: 2, Rock: 2, Fire: 2\n__**Base Stats:**__\n**HP:** 45 | **ATK:** 22\n**DEF:** 60 | **SP:** 27\n**SDEF:** 30 | **SPD:** 29')
                    .addField('3. Vivillon - BUG/FLYING', '__**Affected By:**__\nFlying: 2, **Rock: 4**, Fire: 2, Electric: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 80 | **ATK:** 52\n**DEF:** 50 | **SP:** 90\n**SDEF:** 50 | **SPD:** 89')
                    .addField('4. Helioptile - ELECTRIC/NORMAL', '__**Affected By:**__\nFighting: 2, Ground: 2\n__**Base Stats:**__\n**HP:** 44 | **ATK:** 38\n**DEF:** 33 | **SP:** 61\n**SDEF:** 43 | **SPD:** 70')
                    .addField('5. Pangoro - FIGHTING/DARK', '__**Affected By:**__\nFighting: 2, Flying: 2, **Fairy: 4**\n__**Base Stats:**__\n**HP:** 95 | **ATK:** 124\n**DEF:** 78 | **SP:** 69\n**SDEF:** 71 | **SPD:** 58')
                    .addField('6. Greninja - WATER/DARK', '__**Affected By:**__\nFighting: 2, Bug: 2, Grass: 2, Electric: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 72 | **ATK:** 95\n**DEF:** 67 | **SP:** 103\n**SDEF:** 71 | **SPD:** 122')
                )
            }else{
                message.channel.send('Flare Members: A, B, Printer')
            }
        }
    }
}