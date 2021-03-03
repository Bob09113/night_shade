const Discord = require('discord.js')
const request = require('request')

module.exports = {
    name: 'zcrystals',
    aliases: ['zc'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let member = message.mentions.members.first() || message.member;
        request(`http://www.poke-verse.com/api/api.php?token=JLNHxNxMP6u5SYKf&query=SELECT%20pokeballs%20FROM%20users%20WHERE%20user%20=%20${member.id}%20AND%20guild%20=%200`, (a, b, c) => {
            json = JSON.parse(c)[0].pokeballs.split(',');
            let poison = 0,
            water = 0,
            ground = 0,
            psychic = 0,
            electric = 0,
            fighting = 0,
            grass = 0,
            dark = 0,
            steel = 0,
            ice = 0,
            bug = 0,
            rock = 0,
            fairy = 0,
            flying = 0,
            ghost = 0,
            dragon = 0,
            normal = 0,
            fire = 0;
            for(var i = 0; i<json.length;i++){
                let z = json[i]
                if(z === 'Poisonium Z'){
                    poison++;
                }else if(z === 'Waterium Z'){
                    water++;
                }else if(z === 'Groundium Z'){
                    ground++;
                }else if(z === 'Psychium Z'){
                    psychic++;
                }else if(z === 'Electrium Z'){
                    electric++;
                }else if(z === 'Fightinium Z'){
                    fighting++;
                }else if(z === 'Grassium Z'){
                    grass++;
                }else if(z === 'Darkinium Z'){
                    dark++;
                }else if(z === 'Steelium Z'){
                    steel++;
                }else if(z === 'Icium Z'){
                    ice++;
                }else if(z === 'Buginium Z'){
                    bug++;
                }else if(z === 'Rockium Z'){
                    rock++;
                }else if(z === 'Fairium Z'){
                    fairy++;
                }else if(z === 'Flyinium Z'){
                    flying++;
                }else if(z === 'Ghostium Z'){
                    ghost++;
                }else if(z === 'Dragonium Z'){
                    dragon++;
                }else if(z === 'Normalium Z'){
                    normal++;
                }else if(z === 'Firium Z'){
                    fire++;
                }
            }
            let db = require('../json/database.json');
            let mem = db[member.id];
            if(!mem){
                db[member.id] = {
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
            mem = db[member.id];
            if(mem.zcrystals === 'disabled' && message.author.id != '558800844343214090' && message.author.id != member.id){
                message.channel.send('That user has decided not to share that data')
            }else{
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`${member.user.username}'s Z-Crystals`)
                    .setColor(0x7038F8)
                    .setDescription(`${bot.emojis.cache.find(e => e.name === 'poisonz')} **Poisonium Z** - ${poison}\n${bot.emojis.cache.find(e => e.name === 'waterz')} **Watertium Z** - ${water}\n${bot.emojis.cache.find(e => e.name === 'groundz')} **Groundium Z** - ${ground}\n${bot.emojis.cache.find(e => e.name === 'psychicz')} **Psychium Z** - ${psychic}\n${bot.emojis.cache.find(e => e.name === 'electricz')} **Electrium Z** - ${electric}\n${bot.emojis.cache.find(e => e.name === 'fightingz')} **Fightinium Z** - ${fighting}\n${bot.emojis.cache.find(e => e.name === 'grassz')} **Grassium Z** - ${grass}\n${bot.emojis.cache.find(e => e.name === 'darkz')} **Darkinium Z** - ${dark}\n${bot.emojis.cache.find(e => e.name === 'steelz')} **Steelium Z** - ${steel}\n${bot.emojis.cache.find(e => e.name === 'icez')} **Icium Z** - ${ice}\n${bot.emojis.cache.find(e => e.name === 'bugz')} **Buginium Z** - ${bug}\n${bot.emojis.cache.find(e => e.name === 'rockz')} **Rockium Z** - ${rock}\n${bot.emojis.cache.find(e => e.name === 'fairyz')} **Fairium Z** - ${fairy}\n${bot.emojis.cache.find(e => e.name === 'flyingz')} **Flyinium Z** - ${flying}\n${bot.emojis.cache.find(e => e.name === 'ghostz')} **Ghostium Z** - ${ghost}\n${bot.emojis.cache.find(e => e.name === 'dragonz')} **Dragonium Z** - ${dragon}\n${bot.emojis.cache.find(e => e.name === 'normalz')} **Normalium Z** - ${normal}\n${bot.emojis.cache.find(e => e.name === 'firez')} **Firium Z** - ${fire}`)
                )
            }
        })
    }
}