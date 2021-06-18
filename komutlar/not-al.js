const Discord = require('discord.js')
const db = require('croxydb')

    exports.run = (client, message, args) => {

        if(!args[0]){
            const not = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Komutu Doğru Kullanın.**
            
 <a:bytcec:818712678146113567> g.not-al 1 <Not>
 <a:bytcec:818712678146113567> g.not-al 2 <Not>
 <a:bytcec:818712678146113567> g.not-al 3 <Not>
 `)
            .setColor('RANDOM')
            return message.channel.send(not)
        }

        let zaman = new Date()
        let nm = zaman.getFullYear() + "/" + (zaman.getMonth() +1) + "/" + zaman.getDate() + " | " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        if(args[0] === "1"){
            let mesaj = args.slice(1).join(' ')
            db.set(`not1_${message.author.id}`, [mesaj + "  \n`" + nm + "`"])
            message.inlineReply('<a:bulut:763614153826107393> 1. Notunuz Data\'ya Kayıt Edildi... \n<:kod_uyg:768786604441206794> `g.notlarım`')
        }

        if(args[0] === "2"){
            let mesaj2 = args.slice(1).join(' ')
            db.set(`not2_${message.author.id}`, [mesaj2 + "  \n`" + nm + "`"])
            message.inlineReply('<a:bulut:763614153826107393> 2. Notunuz Data\'ya Kayıt Edildi... \n<:kod_uyg:768786604441206794> `g.notlarım`')

        }

        if(args[0] === "3"){
            let mesaj3 = args.slice(1).join(' ')
            db.set(`not3_${message.author.id}`, [mesaj3 + "  \n`" + nm + "`"])
            message.inlineReply('<a:bulut:763614153826107393> 3. Notunuz Data\'ya Kayıt Edildi... \n<:kod_uyg:768786604441206794> `g.notlarım`')
        }

        if(args[0] > 3){
            message.inlineReply('<:kod_uyg:768786604441206794> En fazla 3 not alabilirsin.')
        }
    } 

exports.conf = {
aliases: [] 
}

exports.help = {
    name: 'not-al'
} 
