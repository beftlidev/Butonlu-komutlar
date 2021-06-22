const { MessageAttachment } = require("discord.js")
const { fetchTransript } = require("reconlx");

exports.run = async (client, message, args) => {

        fetchTranscript(message, 5).then((data) => {
            const file = new MessageAttachment(data, "mesaj.png");
            message.channel.send(file);
        });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "son-mesajlar" 
} 
