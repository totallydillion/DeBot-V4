const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('calc')
    .setDescription('Have DeBot solve a math problem!')
    .addStringOption(option => 
        option.setName('equation')
        .setDescription('The math problem that is trying to be solved')
        .setRequired(true)),
        async execute(interaction) {
            
            let equation = interaction.options.getString('equation');

            interaction.reply(`${equation} = **${eval(equation)}**`);

        },
    };