const Discord = require('discord.js')
const db = require('croxydb')
    exports.run = (client, message, args) => {
        let not1 = db.fetch(`codemarefinot1_${message.author.id}`)
        let not2 = db.fetch(`codemarefinot2_${message.author.id}`)
        let not3 = db.fetch(`codemarefinot3_${message.author.id}`)

const 1 = new Discord.MessageEmbed() 
.setTitle("1.Notun")
.setDescription(`${not1 || "<a:bulut:763614153826107393> Veri yok"}`) 
.serColor("GREEN")

const 2 = new Discord.MessageEmbed() 
.setTitle("2.Notun")
.setDescription(`${not2 || "<a:bulut:763614153826107393> Veri yok"}`) 

const 3 = new Discord.MessageEmbed() 
.setTitle("3.Notun")
.setDescription(`${not3 || "<a:bulut:763614153826107393> Veri yok"}`) 

var pages = [1, 2, 3]
    disbutpages.pages(client, message, pages, 300000, disbut, "red", "844468549417697350", "844468548079321089", "844468546930606100")
  
}
exports.conf = {
    aliases: [] 
}

exports.help = {
    name: 'notlarım'
}
