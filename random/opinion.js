const { SlashCommandBuilder } = require('discord.js');
const {Opinions} = require(`\\DBot4\\databases\\predefined\\Opinion.json`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('opinion')
    .setDescription('Get my expert opinion on something!')
    .addStringOption(option => 
        option.setName('object')
        .setDescription('The thing you are trying to get an opinion on')
        .setRequired(true)
    ),
        async execute(interaction) {
            return interaction.reply(`**${interaction.options.getString('object')}** is something **${Opinions[Math.floor(Math.random() * Opinions.length)]}**.`)
        },
    };