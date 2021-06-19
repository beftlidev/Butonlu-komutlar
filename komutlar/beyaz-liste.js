const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {

 if(message.author.id !== "735555273644703915") if(message.author.id !== "") return message.channel.send("Nope iUgur özel komut");
  let user = args[0]

  if (!user) {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("<:carpi:855750448711467058> Karalisteden kaldırmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: embed})
    return;
  };
  
  db.delete(`karalist_${user}`)
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:tik:804253394326913085> <@${user}> adlı kullanıcı başarıyla karalisteden çıkartıldı!`)
  return message.channel.send({embed: embed})
};

exports.conf = {
aliases: []
};

exports.help = {
name: "beyaz-liste"
};  
