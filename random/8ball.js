const { SlashCommandBuilder } = require('discord.js');
const {answers} = require(`\\DBot4\\databases\\predefined\\8BallAnswers.json`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Have the mighty 8ball answer your deepest of questioning.')
		.addStringOption(option => 
			option.setName('question')
			.setDescription('The question to ask')),
	async execute(interaction) {

        await interaction.reply(answers[Math.floor(Math.random() * answers.length)]);
        return;
	},
};