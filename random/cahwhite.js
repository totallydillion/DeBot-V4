const { SlashCommandBuilder } = require('discord.js');
const {WhiteCards} = require('\\DBot4\\databases\\predefined\\CAHCards.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cahwhite')
		.setDescription('Get a white card from the card game: Cards Against Humanity'),
	async execute(interaction) {
        return interaction.reply(WhiteCards[Math.floor(Math.random() * WhiteCards.length)]);
	},
};