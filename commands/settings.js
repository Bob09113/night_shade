const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: 'settings',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let db = require('../json/database.json');
        let member = db[message.author.id];
        if(!member){
            db[message.author.id] = {
                gold: 'enabled',
                dynamax: 'enabled',
                pokeballs: 'enabled',
                gems: 'enabled',
                zcrystals: 'enabled',
                devils: 'enabled',
                dust: 'enabled',
                selected: 'enabled',
                redeems: 'enabled',
                avatar: 'enabled'
            }
        }
        member = db[message.author.id]
        let selector = args[0];
        if(!selector){
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle('Member Info Status')
                .setColor('#A040A0')
                .setDescription(`**Do ?settings {setting} {enable/disable} to turn of viewing of selected data**\n**Gold:** \`${member.gold}\`\n**Dynamax:** \`${member.dynamax}\`\n**Pokeballs:** \`${member.pokeballs}\`\n**Gems:** \`${member.gems}\`\n**ZCrystals:** \`${member.zcrystals}\`\n**Devils:** \`${member.devils}\`\n**Dust:** \`${member.dust}\`\n**Selected:** \`${member.selected}\`\n**Redeems:** \`${member.redeems}\`\n**Avatar:** \`${member.avatar}\``)
            )
        }else if(selector.toLowerCase() === 'gold'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your gold viewingis ${member.gold}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].gold = 'enabled'
                message.channel.send('Gold viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].gold = 'disabled'
                message.channel.send('Gold viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'dynamax'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your dynamax viewingis ${member.dynamax}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].dynamax = 'enabled'
                message.channel.send('Dynamax viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].dynamax = 'disabled'
                message.channel.send('Dynamax viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'pokeballs'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your pokeballs viewingis ${member.pokeballs}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].pokeballs = 'enabled'
                message.channel.send('Pokeballs viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].pokeballs = 'disabled'
                message.channel.send('Pokeballs viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'gems'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your gems viewingis ${member.gems}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].gems = 'enabled'
                message.channel.send('Gems viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].gems = 'disabled'
                message.channel.send('Gems viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'zcrystals'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your zcrystals viewingis ${member.zcrystals}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].zcrystals = 'enabled'
                message.channel.send('ZCrystals viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].zcrystals = 'disabled'
                message.channel.send('ZCrystals viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'devils'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your devils viewingis ${member.devils}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].devils = 'enabled'
                message.channel.send('Devils viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].devils = 'disabled'
                message.channel.send('Devils viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'dust'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your dust viewingis ${member.dust}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].dust = 'enabled'
                message.channel.send('Dust viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].dust = 'disabled'
                message.channel.send('Dust viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'selected'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your selected viewingis ${member.selected}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].selected = 'enabled'
                message.channel.send('Selected viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].selected = 'disabled'
                message.channel.send('Selected viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'redeems'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your redeems viewingis ${member.redeems}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].redeems = 'enabled'
                message.channel.send('Redeems viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].redeems = 'disabled'
                message.channel.send('Redeems viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }else if(selector.toLowerCase() === 'avatar'){
            let e = args[1];
            if(!args[1]) return message.channel.send(`Your avatar viewingis ${member.avatar}`)
            if(e.toLowerCase() === 'enable'){
                db[message.author.id].avatar = 'enabled'
                message.channel.send('Avatar viewing enabled!')
            }else if(e.toLowerCase() === 'disable'){
                db[message.author.id].avatar = 'disabled'
                message.channel.send('Avatar viewing disabled!')
            }else {
                return message.channel.send('You must specify a valid selector')
            }
        }
        fs.writeFile('./json/database.json', JSON.stringify(db), function(){})
    }
}