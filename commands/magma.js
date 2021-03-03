const Discord = require('discord.js')

module.exports = {
    name: 'magma',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let selector = args[0];
        if(!selector) return message.channel.send('Magma Members: A, B, C, Courtney, Tabitha, Brodie, Maxie, Zinnia')
        else{
            selector = selector.toLowerCase();
            if(selector === 'a'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Magma Grunt A')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225743579119626/houndoom.gif')
                    .addField('1. Grovyle', '__**Affected By:**__\nFlying: 2, Poison: 2, Bug: 2, Fire: 2, Ice: 2\n__**Base Stats:**:__ \n**HP:** 50 | **ATK:** 65\n**DEF:** 45 | **SP:** 85\n**SDEF:** 65 | **SPD:** 95', true)
                    .addField('2. Sandslash', '__**Affected By:**__\nWater: 2, Grass: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 75 | **ATK:** 100\n**DEF:** 110 | **SP:** 45\n**SDEF:** 55 | **SPD:** 65', true)
                    .addField('3. Mighteyena', '__**Affected By:**__\nFighting: 2, Bug: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 70 | **ATK:**90\n**DEF:** 70 | **SP:** 60\n**SDEF:** 60 | **SPD:** 70', true)
                    .addField('4. Shelgon', '__**Affected By:**__\nIce: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 65 | **ATK:** 95\n**DEF:** 100 | **SP:** 60\n**SDEF:** 50 | **SPD:** 50', true)
                    .addField('5. Spinda', '__**Affected By:**__\nFighting: 2\n__**Base Stats:**__\n**HP:** 60 | **ATK:** 60\n**DEF:** 60 | **SP:** 60\n**SDEF:** 60 | **SPD:** 60', true)
                    .addField('6. Houndoom', '__**Affected By:**__\nFighting: 2, Ground: 2, Rock: 2, Water: 2\n__**Base Stats:**__\n**HP:** 75 | **ATK:** 90\n**DEF:** 50 | **SP:** 110\n**SDEF:** 80 | **SPD:** 95', true)
                )
            }else if(selector === 'b'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Magma Grunt B')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225743926591499/glaceon.gif')
                    .addField('1. Zangoose', '__**Affeceted By:**__\nFighting - 0\n__**Base Stats:**__\n**HP:** 73 | **ATK:** 115\n**DEF:** 60 | **SP:** 60\n**SDEF:** 60 | **SPD:** 90', true)
                    .addField('2. Bagon', '__**Affeceted By:**__\nIce: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 45 | **ATK:** 75\n**DEF:** 60 | **SP:** 40\n**SDEF:** 30 | **SPD:** 50', true)
                    .addField('3. Muk', '__**Affeceted By:**__\nGround: 2, Psychic: 2\n__**Base Stats:**__\n**HP:** 105 | **ATK:** 105\n**DEF:** 75 | **SP:** 65\n**SDEF:** 100 | **SPD:** 50', true)
                    .addField('4. Numel', '__**Affeceted By:**__\nGround: 2, **Water: 4**\n__**Base Stats:**__\n**HP:** 60 | **ATK:** 60\n**DEF:** 40 | **SP:** 65\n**SDEF:** 45 | **SPD:** 35', true)
                    .addField('5. Lunaton', '__**Affeceted By:**__\nGround: 2, Bug: 2, Ghost: 2, Steel: 2, Water: 2, Grass: 2, Dark: 2\n__**Base Stats:**__\n**HP:** 70 | **ATK:** 55\n**DEF:** 65 | **SP:** 95\n**SDEF:** 85 | **SPD:** 70', true)
                    .addField('6. Glaceon', '__**Affeceted By:**__\nFighting: 2, Rock: 2, Steel: 2, Fire: 2\n__**Base Stats:**__\n**HP:** 65 | **ATK:** 60\n**DEF:** 110 | **SP:** 130\n**SDEF:** 95 | **SPD:** 65', true)
                )
            }else if(selector === 'c'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Magma Grunt C')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225743310290944/crobat.gif')
                    .addField('1. Solrock', '__**Affeceted By:**__\nGround: 2, Bug: 2, Ghost: 2, Steel: 2, Water: 2, Grass: 2, Dark: 2\n__**Base Stats:**__\n**HP:** 70 | **ATK:** 95\n**DEF:** 85 | **SP:** 55\n**SDEF:** 65 | **SPD:** 70', true)
                    .addField('2. Exploud', '__**Affeceted By:**__\nFighting: 2\n__**Base Stats:**__\n**HP:** 104 | **ATK:** 91\n**DEF:** 63 | **SP:** 91\n**SDEF:** 63 | **SPD:** 68', true)
                    .addField('3. Luvdisc', '__**Affeceted By:**__\nGrass: 2, Electric: 2\n__**Base Stats:**__\n**HP:** 43 | **ATK:** 30\n**DEF:** 55 | **SP:** 40\n**SDEF:** 65 | **SPD:** 97', true)
                    .addField('4. Baltoy', '__**Affeceted By:**__\nBug: 2, Ghost: 2, Water: 2, Grass: 2, Ice: 2, Dark: 2\n__**Base Stats:**__\n**HP:** 40 | **ATK:** 40\n**DEF:** 55 | **SP:** 40\n**SDEF:** 70 | **SPD:** 55', true)
                    .addField('5. Nosepass', '__**Affeceted By:**__\nFighting: 2, Ground: 2, Steel: 2, Water: 2, Grass: 2\n__**Base Stats:**__\n**HP:** 30 | **ATK:** 45\n**DEF:** 135 | **SP:** 45\n**SDEF:** 90 | **SPD:** 30', true)
                    .addField('6. Crobat', '__**Affeceted By:**__\nRock: 2, Electric: 2, Psychic: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 85 | **ATK:** 90\n**DEF:** 80 | **SP:** 70\n**SDEF:** 80 | **SPD:** 130', true)
                )
            }else if(selector === 'courtney'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Magma Admin Courtney')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225757793484800/camerupt.gif')
                    .addField('1. Swellow', '__**Affeceted By:**__\nRock: 2, Electric: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 60 | **ATK:** 85\n**DEF:** 60 | **SP:** 50\n**SDEF:** 50 | **SPD:** 125', true)
                    .addField('2. Ninetales', '__**Affeceted By:**__\nGround: 2, Rock: 2, Water: 2\n__**Base Stats:**__\n**HP:** 73 | **ATK:** 76\n**DEF:** 75 | **SP:** 81\n**SDEF:** 100 | **SPD:** 100', true)
                    .addField('3. Mightyena', '__**Affeceted By:**__\nFighting: 2, Bug: 2, Fairy: 2\n**HP:** 70 | **ATK:** 90\n**DEF:** 70 | **SP:** 60\n**SDEF:** 60 | **SPD:** 70', true)
                    .addField('4. Muk', '__**Affeceted By:**__\nGround: 2, Psychic: 2\n__**Base Stats:**__\n**HP:** 105 | **ATK:** 105\n**DEF:** 75 | **SP:** 65\n**SDEF:** 100 | **SPD:** 50', true)
                    .addField('5. Weepinbell', '__**Affeceted By:**__\nFlying: 2, Fire: 2, Psychic: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 65 | **ATK:** 90\n**DEF:** 50 | **SP:** 85\n**SDEF:** 45 | **SPD:** 55', true)
                    .addField('6. Devil Camerupt', '__**Affeceted By:**__\nGround: 2, **Water: 4**\n__**Base Stats:**__\n**HP:** 70 | **ATK:** 100\n**DEF:** 70 | **SP:** 105\n**SDEF:** 75 | **SPD:** 30', true)
                )
            }else if(selector === 'tabitha'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Magma Admin Tabitha')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225745869340692/celebi.gif')
                    .addField('1. Swellow', '__**Affeceted By:**__\nRock: 2, Electric: 2, Ice: 2\n**HP:** 60 | **ATK:** 85\n**DEF:** 60 | **SP:** 50\n**SDEF:** 50 | **SPD:** 125', true)
                    .addField('2. Torkoal', '__**Affeceted By:**__\nGround: 2, Rock: 2, Water: 2\n__**Base Stats:**__\n**HP:** 70 | **ATK:** 85\n**DEF:** 140 | **SP:** 85\n**SDEF:** 75 | **SPD:** 20', true)
                    .addField('3. Weezing', '__**Affeceted By:**__\nGround: 2, Psychic: 2\n__**Base Stats:**__\n**HP:** 65 | **ATK:** 90\n**DEF:** 120 | **SP:** 85\n**SDEF:** 70 | **SPD:** 60', true)
                    .addField('4. Aggron', '__**Affeceted By:**__\n**Fighting: 4**, **Ground: 4**, Water: 2\n__**Base Stats:**__\n**HP:** 70 | **ATK:** 110\n**DEF:** 180 | **SP:** 60\n**SDEF:** 60 | **SPD:** 50', true)
                    .addField('5. Toxicroak', '__**Affeceted By:**__\nFlying: 2, Ground: 2, **Psychic: 4**\n__**Base Stats:**__\n**HP:** 83 | **ATK:** 106\n**DEF:** 65 | **SP:** 86\n**SDEF:** 65 | **SPD:** 85', true)
                    .addField('6. Devil Celebi', '__**Affeceted By:**__\nFlying: 2, Poison: 2, **Bug: 4**, Ghost: 2, Fire: 2, Ice: 2, Dark: 2\n__**Base Stats:**__\n**HP:** 100 | **ATK:** 100\n**DEF:** 100 | **SP:** 100\n**SDEF:** 100 | **SPD:** 100', true)
                )
            }else if(selector === 'brodie'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Phantom Thief Brodie')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225744338419732/ditto.gif')
                    .addField('1. Golbat', '__**Affeceted By:**__\nRock: 2, Electric: 2, Psychic: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 75 | **ATK:** 80\n**DEF:** 70 | **SP:** 65\n**SDEF:** 75 | **SPD:** 90', true)
                    .addField('2. Shiftry', '__**Affeceted By:**__\nFighting: 2, Flying: 2, Poison: 2, **Bug: 4**, Fire: 2, Ice: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 90 | **ATK:** 100\n**DEF:** 60 | **SP:** 90\n**SDEF:** 60 | **SPD:** 80', true)
                    .addField('3. Shuppet', '__**Affeceted By:**__\nGhost: 2, Dark: 2\n__**Base Stats:**__\n**HP:** 44 | **ATK:** 75\n**DEF:** 35| **SP:** 63\n**SDEF:** 33 | **SPD:** 45', true)
                    .addField('4. Roselia', '__**Affeceted By:**__\nFlying: 2, Fire: 2, Psychic: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 50 | **ATK:** 60\n**DEF:** 45 | **SP:** 100\n**SDEF:** 80 | **SPD:** 65', true)
                    .addField('5. Larvesta', '__**Affeceted By:**__\nFlying: 2, **Rock: 4**, Water: 2\n__**Base Stats:**__\n**HP:** 55 | **ATK:** 85\n**DEF:** 55 | **SP:** 50\n**SDEF:** 55 | **SPD:** 60', true)
                    .addField('6. Devil Ditto', '__**Affeceted By:**__\nFighting: 2\n__**Base Stats:**__\n**HP:** 48 | **ATK:** 48\n**DEF:** 48 | **SP:** 48\n**SDEF:** 48 | **SPD:** 48', true)
                )
            }else if(selector === 'zinnia'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Ex-Magma Zinnia')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225763257876528/dialga.gif')
                    .addField('1. Haxorus', '__**Affected By:**__\nIce: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 76 | **ATK:** 147\n**DEF:** 90 | **SP:** 60\n**SDEF:** 70 | **SPD:** 97', true)
                    .addField('2. Garchomp', '__**Affected By:**__\n**Ice: 4**, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 108 | **ATK:** 130\n**DEF:** 95 | **SP:** 80\n**SDEF:** 85 | **SPD:** 102', true)
                    .addField('3. Giratina', '__**Affected By:**__\nGhost: 2, Ice: 2, Dragon: 2, Dark: 2, Fairy: 2\n__**Base Stars**__:\n**HP:** 150 | **ATK:** 100\n**DEF:** 120 | **SP:** 100\n**SDEF:** 120 | **SPD:** 90', true)
                    .addField('4. Hydreigon', '__**Affected By:**__\nFighting: 2, Bug: 2, Ice: 2, Dragon: 2, **Fairy: 4**\n__**Base Stats:**__\n**HP:** 92 | **ATK:** 105\n**DEF:** 90 | **SP:** 125\n**SDEF:** 90 | **SPD:** 98', true)
                    .addField('5. Drampa', '__**Affected By:**__\nFighting: 2, Ice: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 78 | **ATK:** 60\n**DEF:** 85 | **SP:** 135\n**SDEF:** 91 | **SPD:** 36', true)
                    .addField('6. Altaria', '__**Affected By:**__\nRock: 2, **Ice: 4**, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 75 | **ATK:** 70\n**DEF:** 90 | **SP:** 70\n**SDEF:** 105 | **SPD:** 80', true)
                    .addField('7. Druddigon', '__**Affected By:**__\nIce: 2, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 77 | **ATK:** 120\n**DEF:** 90 | **SP:** 60\n**SDEF:** 90 | **SPD:** 48', true)
                    .addField('8. Flygon', '__**Affected By:**__\n**Ice: 4**, Dragon: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 80 | **ATK:** 100\n**DEF:** 80 | **SP:** 80\n**SDEF:** 80 | **SPD:** 100', true)
                    .addField('9. Pajantom', '__**Affected By:**__\nGhost: 2, Ice: 2, Dragon: 2, Dark: 2, Fairy: 2\n__**Base Stats:**__\n**HP:** 84 | **ATK:** 133\n**DEF:** 71 | **SP:** 51\n**SDEF:** 111 | **SPD:** 101', true)
                    .addField('10. Zygarde', '__**Affected By:**__\n**Ice: 4**, Dragon: 2, Fairy: 2\n__**Base_Stats:**__\n**HP:** 108 | **ATK:** 100\n**DEF:** 121 | **SP:** 81\n**SDEF:** 95 | **SPD:** 95', true)
                    .addField('11. Ampharos', '__**Affected By:**__\nGround: 2\n__**Base Stats:**__\n**HP:** 90 | **ATK:** 75\n**DEF:** 75 | **SP:** 115\n**SDEF:** 90 | **SPD:** 55', true)
                    .addField('12. Devil Dialga', '__**Affected By:**__\nFighting: 2, Ground: 2\n__**Base Stats:**__\n**HP:** 100 | **ATK:** 120\n**DEF:** 120 | **SP:** 150\n**SDEF:** 100 | **SPD:** 90', true)
                )
            }else if(selector === 'maxie'){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('Magma Leader Maxie')
                    .setColor('#A040A0')
                    .setThumbnail('https://media.discordapp.net/attachments/791383690818355243/816225751551574016/hoopa.gif')
                    .addField('1. Volcarona', '__**Affected By:**__\nFlying: 2, **Rock: 4**, Water: 2\n__**Base Stats:**__\n**HP:** 85 | **ATK:** 60\n**DEF:** 65 | **SP:** 135\n**SDEF:** 105 | **SPD:** 100', true)
                    .addField('2. Empoleon', '__**Affected By:**__\nFighting: 2, Ground: 2, Electric: 2\n__**Base Stats:**__\n**HP:** 84 | **ATK:** 86\n**DEF:** 88 | **SP:** 111\n**SDEF:** 101 | **SPD:** 60', true)
                    .addField('3. Groudon', '__**Affected By:**__\nWater: 2, Grass: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 100 | **ATK:** 150\n**DEF:** 140 | **SP:** 100\n**SDEF:** 90 | **SPD:** 90', true)
                    .addField('4. Crobat', '__**Affected By:**__\nRock: 2, Electric: 2, Psychic: 2, Ice: 2\n__**Base Stats:**__\n**HP:** 85 | **ATK:** 90\n**DEF:** 80 | **SP:** 70\n**SDEF:** 80 | **SPD:** 130', true)
                    .addField('5. Kyogre', '__**Affected By:**__\nGrass: 2, Electric: 2\n__**Base Stats:**__\n**HP:** 100 | **ATK:** 100\n**DEF:** 90 | **SP:** 150\n**SDEF:** 140 | **SPD:** 90', true)
                    .addField('6. Devil Hoopa', '__**Affected By:**__\n**Ghost: 4**, **Dark: 4**\n__**Base Stats:**__\n**HP:** 80 | **ATK:** 110\n**DEF:** 60 | **SP:** 150\n**SDEF:** 130 | **SPD:** 70', true)
                )
            }else{
                message.channel.send('Magma Members: A, B, C, Courtney, Tabitha, Brodie, Maxie, Zinnia')
            }
        }
    }
}