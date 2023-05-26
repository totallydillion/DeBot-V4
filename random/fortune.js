const { SlashCommandBuilder } = require('discord.js');
const {fortunes} = require(`\\DBot4\\databases\\predefined\\fortuneCookies.json`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('fortune')
    .setDescription('Get your fortune as well as some lucky numbers!'),
        async execute(interaction) {
            
            let luckyNumbers = [];

            for(let i = 0; i < 5; i++){
                luckyNumbers.push(Math.floor(Math.random() * 99))
            }

            return interaction.reply({embeds:[{
                title: fortunes[Math.floor(Math.random() * fortunes.length)],
                description: `Lucky Numbers: **${luckyNumbers}**`
            }]})
        },
    };