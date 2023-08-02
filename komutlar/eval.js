const Discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const db = require("croxydb")
const { ownerid } = require("../ayarlar.json")

module.exports = {
    slash: true,                                
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('eval')
    .setDescription('Bot sahibi özel komutu.')
    .setDMPermission(false)
    .addStringOption(option =>
        option
            .setName('kod')
            .setDescription('Denenecek kodu belirtin.')
            .setRequired(true)),
              
    async execute(client, interaction) {   
      
      const YetkiYok = new EmbedBuilder()
      .setDescription(`❌ Bu komutu kullanabilmek için **Bot sahibi** olmalısın.`)
      .setColor('Red')
      
      if(interaction.user.id !== "1125068383579287553" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB" && interaction.user.id !== "SAHİB"){
    return interaction.reply({embeds: [YetkiYok]});
}
    
      const code = interaction.options.getString('kod');
        
      try {
      var evaled = clean(await eval(code));
      if (evaled.match(new RegExp(`${client.token}`, "g")));
         
         const Token = new EmbedBuilder()
          .setDescription(`❌ **Bu şekilde tokenimi alamazsın.**`)
          .setColor('Red')
         
         if (evaled.includes(client.token)) return interaction.reply({embeds: [Token]});
                
         const Eval = new EmbedBuilder()
         .addFields({name: `⚜️ **Kod girişi**`, value: `\`${code}\``})
         .addFields({name: `⚜️ **Kod çıkışı**`, value: `\`${evaled}\``}) 
         .setColor('Green')
         interaction.reply({embeds: [Eval]})
        
         } catch (err) {
           
         const Hata = new EmbedBuilder()
         .addFields({name: `⚜️ **Kod girişi**`, value: `\`${code}\``})
         .addFields({name: `⚜️ **Hata**`, value: `\`${err}\``}) 
         .setColor('Red')
         interaction.reply({embeds: [Hata]});
         }
           
         function clean(text) {
         if (typeof text !== "string")
         text = require("util").inspect(text, { depth: 0 });
         text = text
         .replace(/`/g, "`" + String.fromCharCode(8203))
         .replace(/@/g, "@" + String.fromCharCode(8203));
         return text;
      }
   }
}