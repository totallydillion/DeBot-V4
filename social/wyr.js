const { SlashCommandBuilder } = require('discord.js');
const {questions} = require(`\\DBot4\\databases\\predefined\\WouldYouRatherQuestions.json`);

//todo: embedify

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wyr')
    .setDescription('Get a Would You Rather Prompt!'),
        async execute(interaction) {
            // let rawQuestion = questions[Math.floor(Math.random() * questions.length)];
            return interaction.reply(`${questions[Math.floor(Math.random() * questions.length)]}`)
        },
    };