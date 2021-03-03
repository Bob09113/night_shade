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
    name: 'devils',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        request(`http://www.poke-verse.com/api/api.php?token=JLNHxNxMP6u5SYKf&query=SELECT%20badges%20FROM%20users%20WHERE%20user%20=%20${member.id}%20AND%20guild%20=%200`, (a, b, c) => {
            let jj = JSON.parse(c)[0]
            if(!jj) return;
            let devils = []
            let badspread = jj.badges.split(',')
            for(var i = 0; i < badspread.length; i++){
                if(badspread[i].startsWith('<a:')){
                    if(badspread[i].split(':')[1].startsWith('devil')){
                        devils.push(`**${badspread[i].split(':')[1].split('').slice(5).join('')}**`)
                    }
                    if(badspread[i].split(':')[1].endsWith('devil')){
                        let a = badspread[i].split(':')[1].split('')
                        a.pop()
                        a.pop()
                        a.pop()
                        a.pop()
                        a.pop()
                        devils.push(`**${a.join('')}**`)
                    }
                }else{
                    
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
            if(message.author.id === member.id){
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`${member.user.tag} Devil Badges`)
                    .setDescription(devils.join('\n'))
                    .setColor('#A040A0')
                )
            }else if(mem.devils === 'disabled' && message.author.id != '558800844343214090'){
                message.channel.send('That user has decided not to share that data')
            }else{
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`${member.user.tag} Devil Badges`)
                    .setDescription(devils.join('\n'))
                    .setColor('#A040A0')
                )
            }
        })
    }
}