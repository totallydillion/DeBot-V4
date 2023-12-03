const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('heightcheck')
    .setDescription('See how tall someone really is!')
    .addUserOption(option => 
        option.setName('user')
        .setDescription('user')),
        async execute(interaction) {
            let user = interaction.options.getUser('user') || interaction.user;
            
            let feet = Math.floor(Math.random() * 12);
            let inches = Math.floor(Math.random() * 11);
            
            let cm = (feet * 30.48) + (inches * 2.54)
            
            return interaction.reply({embeds:[{
                title:"Height Check",
                description: `**${user.globalName}** is **${feet}'${inches}** (**${cm.toFixed(2)}**cm) tall!`,
            }]
        })
    }
}
