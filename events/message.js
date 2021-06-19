   let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
   let karalistesebep = db.fetch(`sebep_${message.author.id}`)
   if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
   .setColor("RED")
   .setTitle('Dillat!')
   .setDescription(`Space Giveawayı **${karalistesebep}** sebebi ile kullandığın için kara listeye alınmışsın!
Eğer bir yanlışlık olduğunu düşünüyor isen [Destek Sunucumuzda](https://discord.gg/KZfAEjrPUF) Lütfen bunu belirt.`)
   .setFooter(`Space Giveaway`)
   .setThumbnail(client.user.avatarURL())

//if(cmd){ altına 
