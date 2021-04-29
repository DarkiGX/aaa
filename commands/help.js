exports.run = async (client, message) => {
    const Discord = require("discord.js");
  
    let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("")
      .setDescription(`**${member.user}**, bem-vindo(a) à  **${guild.name}**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Boas compras!")
      .setTimestamp(); 
  
  message.reply({embed});
  }