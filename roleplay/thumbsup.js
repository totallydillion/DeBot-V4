const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {thumbsup} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('thumbsup')
    .setDescription("sounds good!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('thumbsup victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = thumbsup[Math.floor(Math.random() * thumbsup.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} gives ${user.globalName || user.username} a thumbs up!` : `${interaction.member.nickname|| interaction.user.globalName} gives a thumbs up!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    