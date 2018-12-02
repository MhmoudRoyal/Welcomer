
const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("518123524997513224");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`_Welcome To Server_ **Royal**`), 4000)        
}
});
bot.login(process.env.BOT_TOKEN)
