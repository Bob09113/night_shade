const Discord = require('discord.js')
const request = require('request')

module.exports = {
    name: 'pokeballs',
    aliases: ['pb'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        request(`http://www.poke-verse.com/api/api.php?token=JLNHxNxMP6u5SYKf&query=SELECT%20pokeballs%20FROM%20users%20WHERE%20user%20=%20${member.id}%20AND%20guild%20=%200`, (a, b, c) => {
            json = JSON.parse(c)[0].pokeballs.split(',');
            var pokeball = 0,
            greatball = 0,
            ultraball = 0,
            superball = 0,
            ultimateball = 0,
            masterball = 0,
            healball = 0,
            loveball = 0;
            for(var i = 0; i<json.length;i++){
                if(json[i] === 'Pokeball'){
                    pokeball++;
                }else if(json[i] === 'Great Ball'){
                    greatball++;
                }else if(json[i] === 'Ultra Ball'){
                    ultraball++;
                }else if(json[i] === 'Super Ball'){
                    superball++;
                }else if(json[i] === 'Ultimate Ball'){
                    ultimateball++;
                }else if(json[i] === 'Master Ball'){
                    masterball++;
                }else if(json[i] === 'Heal Ball'){
                    healball++;
                }else if(json[i] === 'Love Ball'){
                    loveball++;
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
            if(mem.pokeballs === 'disabled' && message.author.id != '558800844343214090' && message.author.id != member.id){
                message.channel.send('That user has decided not to share that data')
            }else{
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`${member.user.username}'s Pokeballs`)
                    .setColor(0x7038B8)
                    .setDescription(`${bot.emojis.cache.find(e => e.name === 'pokeball')}**(101)** - ${pokeball}\n${bot.emojis.cache.find(e => e.name === 'greatball')}**(102)** - ${greatball}\n${bot.emojis.cache.find(e => e.name === 'ultraball')}**(103)** - ${ultraball}\n:blue_circle:**(104)** - ${superball}\n:yellow_circle:**(105)** - ${ultimateball}\n${bot.emojis.cache.find(e => e.name === 'masterball')}**(106)** - ${masterball}\n${bot.emojis.cache.find(e => e.name === 'healball')}**(107)** - ${healball}\n${bot.emojis.cache.find(e => e.name === 'loveball')}**(107)** - ${loveball}`)
                    .setFooter(`104 - Super Ball | 105 - Ultimate Ball`)
                )
            }
        })
    }
}