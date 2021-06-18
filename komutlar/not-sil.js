const Discord = require('discord.js')
const db = require('croxydb')

    exports.run = (client, message, args) => {

        if(!args[0]){
            const not = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Komutu Doğru Kullanın**
 <a:bytcec:818712678146113567> g.not-sil 1
 <a:bytcec:818712678146113567> g.not-sil 2
 <a:bytcec:818712678146113567> g.not-sil 3
 `)
            .setColor('RANDOM')
            return message.channel.send(not)

        }

        if(args[0] === "1"){
            db.delete(`not1_${message.author.id}`)
            message.inlineReply('<:calisiyor:798582407393312808> 1. Notunuz Datadan Silindi')
        }

        if(args[0] === "2"){
            db.delete(`not2_${message.author.id}`)
            message.inlineReply('<:calisiyor:798582407393312808> 2. Notunuz Datadan Silindi')
       } 

        if(args[0] === "3"){
            db.delete(`not3_${message.author.id}`)
            message.inlineReply('<:calisiyor:798582407393312808> 3. Notunuz Datadan Silindi')
        }

        if(args[0] > 4){
            message.inlineReply('<:kod_uyg:768786604441206794> En fazla 3 not silebilirsin.')
        }
    } 

exports.conf = {
    aliases: []
}

exports.help = {
    name: 'not-sil'
} 
