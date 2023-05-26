const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('k2')
    .setDescription('Convert Kelvin to Celsius and Farenheit!')
    .addNumberOption(option => 
        option.setName('number')
        .setDescription('The number you are trying to convert')
        .setRequired(true)),
        async execute(interaction) {
            
            let k = interaction.options.getNumber('number');

            let c =  k - 273.15
            let f = (k-273.15) * 9/5 + 32;
            
            return interaction.reply({embeds:[{
                title:`${k} Kelvin is...`,
                description: `**${c.toFixed(2)}** Celsius \n**${f.toFixed(2)}** Farenheit`
            }]})
        },
    };