const Discord = require("discord.js")
const d = require("discord-buttons")

exports.run = async (client, message, args) => {

        var button1 = new d.MessageButton()
        .setEmoji("804253394326913085")
        .setLabel("Onayla")
        .setStyle("blurple")
        .setID("accept")
        var button2 = new d.MessageButton()
        .setEmoji("855750448711467058")
        .setLabel("Reddet")
        .setStyle("blurple")
        .setID("deny")
        var row = new d.MessageActionRow()
        .addComponents([button1, button2]);
        var suggestionChannel = client.channels.cache.get("857306506692788225");

        const suggestion = new MessageEmbed().setColor("YELLOW")
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(args.slice(2).join(" "))
        .setFooter(message.author.id)
        const reply = new MessageEmbed().setColor("YELLOW")
        .setDescription("<:tik:804253394326913085> Öneriniz moderatörlere gönderildi, en yakın zamanda cevaplanacak!")

        suggestionChannel.send({embed: suggestion, component: row})
        message.channel.send(reply)

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "öneri" 
} 
