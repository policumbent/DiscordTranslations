require('dotenv').config();
const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  if (msg.channel.name !== 'translations' && msg.channel.name !== 'general') {
    const channel = bot.channels.find(channel => channel.name === 'translations');
    const username = msg.author.username;
    const chanel_name = msg.channel.name;  
    translate(msg.content, {from: 'it', to: 'en'})
    .then(res => {
      channel.send(`${username} on ${chanel_name} ➡️ ${res.text}`);
    })
    .catch(err => {
      console.error(err);
    });
    
  }
});
