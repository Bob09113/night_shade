const Discord = require('discord.js')
const config = require('../json/con.json')
function parseTime(time){
    let t = time.split('');
    if(t.length < 2) return 1000;
    let sel = t[t.length-1];
    t.pop()
    if(sel == ('s' || 'S')){
        return parseInt(t.join(''))*1000
    }else if(sel == ('m' || 'M')){
        return parseInt(t.join(''))*60000
    }else if(sel == ('h' || 'h')){
        return parseInt(t.join(''))*3600000
    }else if(sel == ('d' || 'd')){
        return parseInt(t.join(''))*86400000
    }else{
        if(isNaN(time)) return 1000
        return time;
    }
}

module.exports = {
    name: 'remind',
    aliases: [],
    locked: false,
    perm: 'SEND_MESSAGES',
    execute(message = new Discord.Message(), bot = new Discord.Client(), args = []){
        let time = args[0];
		if(!args[0] || isNaN(parseTime(args[0]))){
			return message.channel.send('You must provide a time');
		}else{
            time = parseTime(time);
            message.channel.send('Reminder set!')
			setTimeout(function(){
				message.channel.send(`${message.member}, ${args.slice(1).join(' ')}`)
			}, time)
		}
    }
}