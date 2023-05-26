const { SlashCommandBuilder } = require('discord.js');
const {dadjokes} = require('\\DBot4\\databases\\predefined\\dadJokes.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dadjoke')
		.setDescription('Get a super funny dad joke!'),
	async execute(interaction) {
        return interaction.reply(dadjokes[Math.floor(Math.random() * dadjokes.length)]);
	},
};