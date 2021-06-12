const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons") 
const got = require('got');
module.exports.run = async (bot, message, args) => {

	const embed = new Discord.MessageEmbed();	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;
			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

let up = new MessageButton()
    .setLabel(`${memeUpvotes}`)
    .setID("up")
    .setEmoji("👍") 
    .setStyle("blurple");

let num = new MessageButton()
    .setLabel(`${memeNumComments}`)
    .setID("num")
    .setEmoji("💬") 
    .setStyle("green");

let link = new MessageButton() 
    .setUrl(`${memeUrl}`)
    .setLabel("Meme Link")
    .setStyle("url")

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
                        message.channel.send({
                        embed: embed, 
                        buttons: [up, num, link]
                        }) 
		})
		.catch(console.error);
};
exports.help = {
	name: 'meme',
	aliases: [],
};
