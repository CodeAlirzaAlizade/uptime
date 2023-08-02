const Discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const db = require("croxydb")

module.exports = {
    slash: true, 
    yetki: 'Administrator',
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('uptime-sistemi-kur')
    .setDescription('Uptime sistemini sunucunuzda ayarlar.')
    .setDMPermission(false)
    .addChannelOption(option =>
        option
            .setName('kanal')
            .setDescription('Uptime sisteminin kurulacağı kanalı belirtin.')
            .setRequired(true)),
  
    async execute(client, interaction) {   
        
      const kanal = interaction.options.getChannel('kanal');
      const Sistem = db.fetch(`UptimeSistemi_${interaction.guild.id}`)
      
      if(!Sistem) {
          
        const SistemAçıldı = new EmbedBuilder()
             .setColor("Green")
             .setDescription(`✅ Uptime kanalı başarıyla <#${kanal.id}> olarak ayarlandı.`)
        interaction.reply({embeds: [SistemAçıldı]})
        
        const SistemMesajı = new EmbedBuilder()
             .setColor("Blue")
             .setImage("https://media.discordapp.net/attachments/1136198483649499320/1136201769966391398/standard.gif")
             .setDescription("**Uptime Sistemi | Uptime System** \n")
.addFields({name: "🇹🇷", value: "📜 | Gizlilik ve Güvenlik politikamızı destek sunucumuzdan görebilirsin! \n 🌐 | Link eklemek için: **Ekle | Add** \n ❌ | Linkinizi silmek için: **Sil | Delete** \n 📜 | Linklerinizi görmek için: **Liste | List** \n ❓ | Aradığınızı bulamadıysanız veya öneriniz varsa sizi destek sunucumuza bekleriz. \n "}, {name: "🇺🇸", value: "<:Poltika:1132425331589009419> | You can view our Privacy and Security policy on our support server! \n 🌐 | To add link: **Ekle | Add** \n ❌ | To remove your links: **Sil | Delete** \n 📜 | To see your links: **Liste | List** \n ❓ | If you didn't find what you were looking for or if you have a suggestion, we welcome you to our support server."})
        
        .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
     
        const Butonlar = new ActionRowBuilder() 
           .addComponents(new Discord.ButtonBuilder()
           .setEmoji("➕")
           .setLabel("Ekle")
           .setStyle(ButtonStyle.Success)
           .setCustomId("eklebuton"),
          new Discord.ButtonBuilder()
           .setEmoji("➖")
           .setLabel("Sil")
           .setStyle(ButtonStyle.Danger)
           .setCustomId("silbuton"),
           new Discord.ButtonBuilder()
           .setEmoji("📜")
           .setLabel("Liste")
           .setStyle(ButtonStyle.Primary)
           .setCustomId("listebuton"),
           new Discord.ButtonBuilder()        
        .setURL(`https://discord.gg/TyX7rSdWrP`)
        .setLabel(`Destek sunucusu`)
        .setStyle("Link"))
        
        client.channels.cache.get(kanal.id).send({embeds: [SistemMesajı], components: [Butonlar]})
        
        db.set(`UptimeSistemi_${interaction.guild.id}`, kanal.id)
          
        } else {
           
        const SistemAçık = new EmbedBuilder()
         .setColor("Red")
         .setDescription(`❌ Uptime sistemi zaten kurulu. Sıfırlamak için </uptime-sistemi-sıfırla0>`)
      
        interaction.reply({embeds: [SistemAçık]})
        
         
     }
   }
}