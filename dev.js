require('dotenv').config()
const Discord = require('discord.js')
const fs = require('fs')
const bot = new Discord.Client({fetchAllMembers: true})
bot.commands = new Discord.Collection();
const config = require('./json/con.json');

let cmds = fs.readdirSync('./commands')
for(const file of cmds){
    let cmd = require(`./commands/${file}`);
    bot.commands.set(cmd.name, cmd)
    for(var i = 0; i<cmd.aliases.length; i++){
        bot.commands.set(cmd.aliases[i], cmd)
    }
}

bot.on('ready', async () => {
    console.log('Logged in');
    bot.user.setActivity({
        type: 'LISTENING',
        name: "?help"
    })
})

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let db = require('./json/database.json')
    let prefix = db.prefixes[message.guild.id] || config.prefix
    let cm = message.content.split(' ')[0]
    cm = cm.split('').slice(prefix.length).join('');
    let args = message.content.split(' ').slice(1)
    if(message.mentions.members.first()){
        if(message.mentions.members.first().id === bot.user.id){
            message.channel.send(
                `**${prefix}** is the bot prefix(configurable with **${prefix}prefix**). Do **${prefix}help** for a list of commands`
            )
        }
    }
    if(!message.content.startsWith(prefix)) return;

    let cmd = bot.commands.get(cm.toLowerCase());
    if(!cmd) return;
    else{
        if(!message.member.hasPermission(cmd.perm)){
            return message.channel.send(`Requires \`${cmd.perm}\` Perms!`)
        }else{
            if(cmd.locked == true && message.guild.id != '789261861266391101'){
                return message.channel.send('Unauthorized use detected... https://discord.gg/r2FQrhAvdW')
            }else{
                cmd.execute(message, bot, args)
            }
        }
    }
})

bot.login(process.env.DEV)