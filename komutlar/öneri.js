const Discord = require('discord.js');
const db = require('croxydb');

exports.run = (client, message, args) => {

    let oneri = args.slice(0).join(" ");
  const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "anan", "karı","bok",];
        if (kufur.some(word => kufur.includes(word))) {
          message.inlineReply('**Önerinizde küfür belirtemessin!**')
  return;
        }
  if(!lara) return message.inlineReply(' **Bir öneri belirtmelisiniz.**')
  message.inlineReply('**Öneriniz başarı ile gönderildi** \n**Öneriniz** = ```'+lara+'```')

  let gonde = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('<a:cooldoge:763251727700590604> **Bir öneri var!** <a:cooldoge:763251727700590604>')
  .setDescription(`<a:yubbi:774337288451653663> **Öneren kişi** : ${message.author.username} 
<a:diamond:754667451022704690> **Öneri**: ${oneri}`)
  client.users.cache.get('753842258457002036').send(gonde)
  client.channels.cache.get('795203361606860820').send(gonde)
  };

exports.conf = {
aliases: [] 
};

exports.help = {
  name: 'öneri',
}; 
