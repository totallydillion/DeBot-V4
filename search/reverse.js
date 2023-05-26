const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('reverse')
    .setDescription('Reverse some text!')
    .addStringOption(option => 
        option.setName('text')
        .setDescription('lorem ipsum')
        .setRequired(true)),
        async execute(interaction) {
            return interaction.reply(interaction.options.getString("text").split("").reverse().join(""));
        },
    };