const Discord = require('discord.js')
const request = require('request')
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

module.exports = {
    name: 'gold',
    aliases: ['g'],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        request(`http://www.poke-verse.com/api/api.php?token=JLNHxNxMP6u5SYKf&query=SELECT%20gold%20FROM%20users%20WHERE%20user%20=%20${member.id}%20AND%20guild%20=%200`, (a, b, c) => {
            let jj = JSON.parse(c)[0]
            if(!jj) return;
            jj = numberWithCommas(jj.gold)
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
            if(mem.gold === 'disabled' && message.author.id != '558800844343214090' && message.author.id != member.id){
                message.channel.send('That user has decided not to share that data')
            }else{
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`${member.user.username}'s Gold`)
                    .setColor(0xA040A0)
                    .setDescription(`${bot.emojis.cache.find(e => e.name === 'gold')} ${jj}`)
                )
            }
        })
    }
}