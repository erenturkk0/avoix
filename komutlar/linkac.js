const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`linkK_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış :slight_smile:`)
}
  db.set(`linkK_${message.channel.id}`, message.channel.id)
  message.reply(`Bu özellik **başarıyla açıldı.** ${message.guild.emojis.cache.get(":rocket:")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["link-engel-aç"], 
  permLevel: 0
};

exports.help = {
  name: 'linkaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
