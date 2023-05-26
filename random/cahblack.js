const { SlashCommandBuilder } = require('discord.js');
const {BlackCards} = require('\\DBot4\\databases\\predefined\\CAHCards.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cahblack')
		.setDescription('Get a black card from the card game: Cards Against Humanity'),
	async execute(interaction) {
        return interaction.reply(BlackCards[Math.floor(Math.random() * BlackCards.length)]);
	},
};