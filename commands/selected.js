const Discord = require('discord.js')
const request = require('request')

module.exports = {
    name: 'selected',
    aliases: ['sl'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let pokenames = require('../json/nam.json')
        let shiny = ['', bot.emojis.cache.find(e => e.name === 'shiny'), bot.emojis.cache.find(e => e.name === 'shifter'), bot.emojis.cache.find(e => e.name === 'lucky')]
        let dyna = ['', bot.emojis.cache.find(e => e.name === 'inactive'), bot.emojis.cache.find(e => e.name === 'active'), bot.emojis.cache.find(e => e.name === 'discharged')]
        let mutated = ['', bot.emojis.cache.find(e => e.name === 'mutated')]
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        request(`http://www.poke-verse.com/api/api.php?token=JLNHxNxMP6u5SYKf&query=SELECT%20*%20FROM%20pokemons%20WHERE%20user%20=%20${member.id}%20AND%20guild%20=%200%20AND%20slot%20%3E%200`, (a, b, c) => {
            let pokes = JSON.parse(c);
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
            if(mem.selected === 'disabled' && message.author.id != '558800844343214090' && message.author.id != member.id){
                message.channel.send('That user has decided not to share that data')
            }else{
                const embed = new Discord.MessageEmbed()
                .setTitle(`${member.user.username}'s Selected Team`)
                .setColor(0xA040A0);
                for(var i = 0; i<pokes.length;i++){
                    let poke = pokes[i];
                    if(poke.health == "-1"){
                        poke.health = 'Full'
                    }
                    let star = ''
                    if(parseInt(poke.stars) > 0) star = ':star:'
                    embed.addField(
                        `${pokenames[parseInt(poke.pokemon)]} ${shiny[poke.shiny]} ${dyna[poke.dynamax]} ${mutated[poke.mutated]} ${star}`,
                        `**Level:** ${poke.level}\n**XP:** ${poke.xp}/${poke.xpRequired}\n**IVs:** ${poke.ivs}\n**Slot:** ${poke.slot} **HP:** ${poke.health}`,
                        true
                    )
                }
                message.channel.send(embed)
            }
        })
    }
}