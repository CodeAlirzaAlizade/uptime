const Discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const db = require("croxydb")

module.exports = {
    slash: true,                                
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('premium-al')
    .setDescription('Bot sahibi özel komutu.')
    .setDMPermission(false)
    .addUserOption(option =>
        option
            .setName('kullanıcı')
            .setDescription('Premiumu alınacak kullanıcıyı belirtin.')
            .setRequired(true)),
  
    async execute(client, interaction) {   
      
      const YetkiYok = new EmbedBuilder()
      .setDescription(`❌ Bu komutu kullanabilmek için **Bot sahibi** olmalısın.`)
      .setColor('Red')
        
      if(interaction.user.id !== "1125068383579287553" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "1059475189588570122"){
      return interaction.reply({embeds: [YetkiYok]});
}
      
      const kullanıcı = interaction.options.getUser('kullanıcı');
      const PremiumÜye = db.fetch(`PremiumÜye_${kullanıcı.id}`);
      
      const PremiumAlındı = new EmbedBuilder()
         .setColor("Green")
         .setDescription(`✅ ${kullanıcı} **adlı kullanıcının premiumu alındı.**`)
        
      const PremiumYok = new EmbedBuilder()
         .setColor("Red")
         .setDescription(`❌ ${kullanıcı} **adlı kullanıcının zaten premium üyeliği bulunmuyor.**`)
        
      const PremiumGitti = new EmbedBuilder()
         .setColor("Red")
         .setTitle("Bir kullancının premiumu alındı")
         .addFields({name: `👤 **Kullanıcı adı**`, value: `${kullanıcı}`})
         .addFields({name: `💼 **Kullanıcı tagı**`, value: `${kullanıcı.tag}`})
         .addFields({name: `📋 **Kullanıcı id**`, value: `${kullanıcı.id}`})
         
      if(!PremiumÜye) {
      
      interaction.reply({embeds: [PremiumYok]}) 
      
      } else {
   
      db.delete(`PremiumÜye_${kullanıcı.id}`)
      interaction.reply({embeds: [PremiumAlındı]})
      client.channels.cache.get("1112800957995167824").send({embeds: [PremiumGitti]})
      db.subtract(`PremiumSayı`, 1)
        
       }
    }
}