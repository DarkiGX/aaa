const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = async (bot, message, args) => {
  if ( !== "800443984266657837")
    return message.reply(" Sai daq verme!");
 message.delete(100)
  const id = args.join(" ");
    message.guild.roler.get(id).send("Teste");
    message.channel.send("adicionado!")
};