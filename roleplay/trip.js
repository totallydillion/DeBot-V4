const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {trip} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('trip')
    .setDescription("didn't see you, sorry!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('tripping victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = trip[Math.floor(Math.random() * trip.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} trips ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} trips on the air!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    