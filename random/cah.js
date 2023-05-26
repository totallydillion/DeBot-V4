const { SlashCommandBuilder } = require('discord.js');
const cards = require('\\DBot4\\databases\\predefined\\CAHCards.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cah')
		.setDescription('Get a white and a black card from the card game: Cards Against Humanity:'),
	async execute(interaction) {
        let blackCard = cards.BlackCards[Math.floor(Math.random() * cards.BlackCards.length)];
        let whiteCard = cards.WhiteCards[Math.floor(Math.random() * cards.WhiteCards.length)];

        return interaction.reply({embeds:[{
            title: blackCard,
            description: whiteCard
        }]})
	},
};