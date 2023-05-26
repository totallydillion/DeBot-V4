const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('f2')
    .setDescription('Convert Farenheit to Celsius and Kelvin!')
    .addNumberOption(option => 
        option.setName('number')
        .setDescription('The number you are trying to convert')
        .setRequired(true)),
        async execute(interaction) {
            
            let f = interaction.options.getNumber('number');

            let c =  (f - 32) * 5/9
            let k = c + 273.15
            
            return interaction.reply({embeds:[{
                title:`${f} Farenheit is...`,
                description: `**${c.toFixed(2)}** Celsius \n**${k.toFixed(2)}** Kelvin`
            }]})
        },
    };