const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {

 if(message.author.id !== "753842258457002036") if(message.author.id !== "") return message.channel.send("Nope iUgur özel bu ab");
  let user = args[0]
      let sebep = args.slice(1).join(' ')

  if (!user) {
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("<:carpi:855750448711467058> Karalisteye almak istediğin kullanıcının id sini yaz!")
    message.channel.send({embed: embed})
    return;
  };

  if(!sebep){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("<:carpi:855750448711467058> Lütfen karalisteye almak için bir sebep belirtin!")
    message.channel.send({embed: embed})
    return;
  }
  
  db.set(`karalist_${user}`, "aktif")
  db.set(`sebep_${user}`, sebep)
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:tik:804253394326913085> <@${user}> adlı kullanıcı başarıyla **${sebep}** sebebiyle karalisteye alındı!`)
    .setTimestamp()
    message.channel.send({embed: embed})
};

exports.conf = {
  aliases: [],
};

exports.help = {
name: "karal-iste"
};
