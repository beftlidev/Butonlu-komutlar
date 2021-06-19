const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const cevaplar = [
    "%0  Çok zor ab",
    "%4  Olacak gibi değil...",
    "%12  Bence hiç deneme?",
    "%26  Hmm düşük bence.",
    "%31  Bence şansını dene xd.",
    "%45  WoaW! Biraz daha yükseltebilirsin.",
    "%59  İyi iyi",
    "%63  Olcak olcakk!", 
    "%72  Hay maşallah yükseliyor!", 
    "%87  Çıkma teklifi ettin mi?", 
    "%99  Aynı oyun oynarken son 1 kalır gibi...",
    "%100  ADAMM! İşte budur.", 
];

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("<:carpi:855750448711467058> Birini etiketlemelisin")
          .setTimestamp()
      );
    }

const user = message.mentions.members.first();

const embed = new Discord.MessageEmbed() 
.setColor("PINK") 
.setDescription(`${cevap}
( ${message.author.username ) - ( ${user.author.username} )`) 
.setTitle("Aşk Ölçer 2000")
message.channel.send(embed) 

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "aşk-ölçer" 
} 
