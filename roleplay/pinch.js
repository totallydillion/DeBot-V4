const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {pinch} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pinch')
    .setDescription("pinching hurts")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('pinching victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = pinch[Math.floor(Math.random() * pinch.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} pinches ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} pinches themself!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    