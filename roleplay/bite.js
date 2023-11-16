const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {bite} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bite')
    .setDescription("Bite someone, it's fun!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('Who are you trying to bark at?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = bite[Math.floor(Math.random() * bite.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} bit ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} just bit themselves!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    