const Discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    slash: true,                                
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('sil')
    .setDescription('❌ Bu komutu sadece <@1125068383579287553> kullanabilir')
    .setDMPermission(false),
  
    async execute(client, interaction) {   
    }
}