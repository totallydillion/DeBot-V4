const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {thumbsdown} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('thumbsdown')
    .setDescription("yeahhh that's a no from me")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('disapproval victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = thumbsdown[Math.floor(Math.random() * thumbsdown.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} gives ${user.globalName || user.username} a thumbs down!` : `${interaction.member.nickname|| interaction.user.globalName} signals a thumbs down`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    