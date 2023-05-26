const {questions} = require(`\\DBot4\\databases\\predefined\\NeverHaveIEverQuestions.json`)
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('nhie')
    .setDescription('Get a "Never Have I Ever" Question!'),
    async execute(interaction) {
        return interaction.reply({embeds:[{
            title: `Never Have I Ever...`,
            description: `${questions[Math.floor(Math.random() * questions.length)]}`,
        }]});
    },
};