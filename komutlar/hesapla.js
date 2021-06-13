const Discord = require("discord.js")
exports.run = async (client, message, args) => {
const { Calculator } = require('weky')
  await Calculator(message)
} 
exports.conf = {
aliases: [] 
} 
exports.help = {
name: "hesapla" 
} 
