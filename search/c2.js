const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('c2')
    .setDescription('Convert Celcius to Fareheit and Kelvin!')
    .addNumberOption(option => 
        option.setName('number')
        .setDescription('The number you are trying to convert')
        .setRequired(true)),
        async execute(interaction) {
            
            let c = interaction.options.getNumber('number');

            let f = (c * 9/5) + 32
            let k = c + 273.15
            
            return interaction.reply({embeds:[{
                title:`${c} Celsius is...`,
                description: `**${f.toFixed(2)}** Farenheit \n**${k.toFixed(2)}** Kelvin`
            }]})
        },
    };