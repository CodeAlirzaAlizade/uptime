const Discord = require('discord.js')
const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder } = require('discord.js')
const { botid } = require('../ayarlar.json')
const db = require("croxydb")

module.exports = {
    slash: true,                                
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('bakım-kapat')
    .setDescription('Bot sahibi özel komutu.')
    .setDMPermission(false),
  
    async execute(client, interaction) {   
      
      const YetkiYok = new EmbedBuilder()
      .setDescription(`❌ Bu komutu kullanabilmek için **Bot sahibi** olmalısın.`)
      .setColor('Red')
      
    if(interaction.user.id !== "1125068383579287553" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB"){
    return interaction.reply({embeds: [YetkiYok]});
}
      
      const Bakım = db.fetch(`Bakım`)
      const Sebep = db.fetch(`BakımSebep`)
      
      if(!Bakım) {
        
      const BakımKapalı = new EmbedBuilder()
      .setDescription(`❌ **Bot zaten bakımda bulunmuyor.**`)
      .setColor('Red')
      interaction.reply({embeds: [BakımKapalı]})
        
      } else {
        
      db.delete(`Bakım`)
      db.delete(`BakımSebep`)
        
      const BakımKapatıldı = new EmbedBuilder()
      .setDescription(`✅ **Bot bakımdan çıkartıldı.**`)
      .setColor('Green')
      interaction.reply({embeds: [BakımKapatıldı]})
      
        }
     }
  }