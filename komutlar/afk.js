const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.author
  let sebep = args.join(" ")
  
  if (!sebep) return message.channel.send(`:x: **| Bir Sebep Yazmalısın.**`)
  
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(`:white_check_mark: **| Artık \`${sebep}\` Sebebiyle AFK'sın.** **<@` + message.author.id + `>**`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}