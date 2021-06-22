const { MessageAttachment } = require("discord.js")
const { hangman } = require("reconlx");

exports.run = async (client, message, args) => {

const hang = new hangman({
    message: message,
    word: args.slice(1).join(" "),
    client: client,
    channelID: message.mentions.channels.first(),
});

// starting the game
hang.start();

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "adam-asmaca" 
} 
