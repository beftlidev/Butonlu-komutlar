const Discord = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const disbut = require("discord-buttons") 

const db = require('croxydb')
    exports.run = (client, message, args) => {
        let not1 = db.fetch(`not1_${message.author.id}`)
        let not2 = db.fetch(`not2_${message.author.id}`)
        let not3 = db.fetch(`not3_${message.author.id}`)

const e1 = new Discord.MessageEmbed() 
.setTitle("1.Notun")
.setDescription(`${not1 || "<a:bulut:763614153826107393> Veri yok"}`) 
.serColor("GREEN")

const e2 = new Discord.MessageEmbed() 
.setTitle("2.Notun")
.setDescription(`${not2 || "<a:bulut:763614153826107393> Veri yok"}`) 

const e3 = new Discord.MessageEmbed() 
.setTitle("3.Notun")
.setDescription(`${not3 || "<a:bulut:763614153826107393> Veri yok"}`) 

var pages = [e1, e2, e3]
    disbutpages.pages(client, message, pages, 300000, disbut, "red", "844468549417697350", "844468548079321089", "844468546930606100")
  
}
exports.conf = {
    aliases: [] 
}

exports.help = {
    name: 'notlarım'
}
