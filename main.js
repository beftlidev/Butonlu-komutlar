client.on("message", async (msg, member, guild) => {
  let saasm = db.fetch(`saasm_${msg.guild.id}`) 
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      //if (msg.content.toLowerCase() === 'Sa') {
      msg.inlineReply(`${saasm || "Aleyküm Selam Hoşgeldin Kankam <a:nrp:821434879539281931>"}`);
    }
  }
});

client.on("clickButton", async (button) => {
    var guild = client.guilds.cache.get("752164000418234448")
    if(button.id === "accept") {
        button.message.edit(button.message.embeds[0].setColor("GREEN")).then(m => m.pin())
    }
    if(button.id === "deny") {
        button.message.edit(button.message.embeds[0].setColor("RED"))
    }
})
