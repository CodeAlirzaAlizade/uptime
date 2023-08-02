const Discord = require('discord.js')
const db = require('croxydb')
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js')
const { botid, ownerid } = require("../ayarlar.json")
const osutils = require('os-utils') 

module.exports = {
    slash: true,                                
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('istatistik')
    .setDescription('Bot istatistiklerini gösterir.')
    .setDMPermission(false),
      
    async execute(client, interaction) {   
      
      let a = client.users.cache.get('1125068383579287553').tag

   
      
    //  osutils.cpuUsage(function(v) {
        
      const Linkler = db.fetch(`UptimeLink`) || []
      const Uptime = db.fetch(`UptimeLink_${interaction.user.id}`) || []
      const LinkLimit = db.fetch(`LinkLimit_${interaction.user.id}`) || 0
      let Limit = LinkLimit+3
      
      if(!Uptime.length <= 0) {
        
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      
       const IstatistikYok = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
      .setImage("https://cdn.discordapp.com/attachments/1112827440608313434/1114992699351765072/1685905337921_jxqx55_2_1.jpg")
      .addFields({
          name: "🌐 | Geliştiriciler",
          value: `> **[Erasty](https://discord.com/users/1112637700604960880)**`,
          inline: true
        },
        {
          name: "🌐 | Discord.JS",
          value: `> **v14.9.0**`,
          inline: true
        }, 
        {
          name: "🌐 | Node.JS",
          value: `> **v20.0.0**`,
          inline: true
        },
        {
          name: "🌐 | Çalışma Süresi", 
          value: `> **${days}gün ${hours}saat ${minutes}dakika ${seconds}saniye**`,
          inline: true
        },
        {
          name: "🌐 | Toplam sunucular",
          value: `> **${client.guilds.cache.size}**`,
          inline: true
        },
        {
          name: "🌐 | Toplam kullanıcılar",
          value: `> **${client.users.cache.size}**`,
          inline: true
        },
      
        {
        name: "🌐 | Mesaj gecikmesi",
        value: `> **${Date.now() - interaction.createdTimestamp}ms**`,
          inline: true 
        },      
        {
        name: "🌐 Bellek kullanımı",
        value: `\`%${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}\``, 
        },  
        {
        name: "📊 | Ram kullanımı",
        value: `> **${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)}mb\**`,
          inline: true
        },
        {
          name: "📊 | Toplam projeler",
          value: `> **${Linkler.length}**`,
          inline: true
        },
        {
          name: "📊 | Senin projelerin",
          value: `> **${Uptime.length}\**`,
          inline: true
        },
        {           
          name: "📊 | Toplam premium",
          value: `> **${db.fetch(`PremiumSayı`) || 0}\**`,
          inline: true
        },
        {           
          name: "📊 | Monitör hakkın",
          value: `> **${Limit}**`,
          inline: true
        })          
      
      .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
     
     return interaction.reply({embeds: [IstatistikYok]})
       
     } else {
       
       let days = Math.floor(client.uptime / 86400000);
       let hours = Math.floor(client.uptime / 3600000) % 24;
       let minutes = Math.floor(client.uptime / 60000) % 60;
       let seconds = Math.floor(client.uptime / 1000) % 60;
      
     const Istatistik = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
      .setImage("https://media.discordapp.net/attachments/1136198483649499320/1136201769966391398/standard.gif")
      .addFields({
          name: "🌐 Bot geliştiricileri",
        value: `> **[Erasty](https://discord.com/users/1112637700604960880)**`,
          inline: true
        },
        {
          name: "🌐 Discord.JS",
          value: `> **v14.7.1**`,
          inline: true
        }, 
        {
          name: "🌐 | Çalışma Süresi", 
          value: `> **${days}gün ${hours}saat ${minutes}dakika ${seconds}saniye**`,
          inline: true
        },
        {
          name: "🌐 Kütüphane",
          value: `> **v16.14.2**`,
          inline: true
        },
        {
          name: "🌐 Toplam sunucular",
          value: `> **${client.guilds.cache.size}**`,
          inline: true
        },
        {
          name: "🌐 Toplam kullanıcılar",
          value: `> **${client.users.cache.size}**`,
          inline: true
        },
        {
        name: "🌐 Mesaj gecikmesi",
        value: `> **${Date.now() - interaction.createdTimestamp}ms**`,
          inline: true 
        },      
        {
        name: "🌐 Bellek kullanımı",
        value: `\`%${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}\``, 
        },  
        {
        name: "📊 Ram kullanımı",
        value: `> **${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)}mb\**`,
          inline: true
        },
        {
          name: "📊 Toplam projeler",
          value: `> **${Linkler.length}**`,
          inline: true
        },
        {
          name: "📊 Senin projelerin",
          value: `> **${Uptime.length}\**`,
          inline: true
        },
        {           
          name: "📊 Toplam premium",
          value: `> **${db.fetch(`PremiumSayı`) || 0}\**`,
          inline: true
        },
        {           
          name: "📊 Monitör hakkın",
          value: `> **${Limit}**`,
          inline: true
        })       
     
     .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
     
     return interaction.reply({embeds: [Istatistik]})
               
         }
      // })
    }
}
