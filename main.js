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
