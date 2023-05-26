const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Heads or tails!')
    .addIntegerOption(option => 
        option.setName('coins')
        .setDescription('How many coins would you like to flip? Default: 1')
        .setRequired(false)),
        async execute(interaction) {
            
            let amount = interaction.options.getInteger('coins') ?? 1;
            
            let randomNumber = Math.floor(Math.random() * amount)
            
            return interaction.reply({embeds:[{
                title: `${amount} Coin(s) were flipped..`,
                description: `**Heads:** ${randomNumber}\n**Tails: **${amount  - randomNumber}`,
            }]})
            
        },
    };