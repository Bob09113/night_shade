const Discord = require('discord.js')
const request = require('request')

module.exports = {
    name: 'gems',
    aliases: ['gs'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        request(`http://www.poke-verse.com/api/api.php?token=JLNHxNxMP6u5SYKf&query=SELECT%20gems%20FROM%20users%20WHERE%20user%20=%20${member.id}%20AND%20guild%20=%200`, (a, b, c) => {
            let gems = JSON.parse(c)[0].gems.split(',')
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
            if(mem.gems === 'disabled' && message.author.id != '558800844343214090' && message.author.id != member.id){
                message.channel.send('That user has decided not to share that data')
            }else{
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`${member.user.username}'s Gems`)
                    .setColor(0x7038B8)
                    .setDescription(`
                    **1 - HP**: ${gems[0]}
                    **2 - ATK**: ${gems[1]}
                    **3 - DEF**: ${gems[2]}
                    **4 - SPATK**: ${gems[3]}
                    **5 - SPDEF**: ${gems[4]}
                    **6 - SPD**: ${gems[5]}
                    `)
                )
            }
        })
    }
}