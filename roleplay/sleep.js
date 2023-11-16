const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {sleep} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sleep')
    .setDescription("napping for five minutes won't hurt")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose making you fall asleep')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = sleep[Math.floor(Math.random() * sleep.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} falls asleep listening to ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} fell asleep!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    