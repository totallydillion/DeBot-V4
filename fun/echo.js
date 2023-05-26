const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Echo a message into a channel!')
    .addStringOption(option => 
        option.setName('input')
        .setDescription('What would you like to be echoed?')
        .setRequired(true)
        .setMaxLength(2000))
        .addChannelOption((option) =>
        option.setName('channel')
        .setDescription('Where would you like this echoed?')
        .addChannelTypes(ChannelType.GuildText)),
            async execute(interaction) {
                
                const text = interaction.options.getString('input');
                const channel  = interaction.options.getChannel('channel');

                channel.send(text);

                await interaction.reply({content: 'The message has been sent!', ephemeral: true});
                

                return;
            },
        };