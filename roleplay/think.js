const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {think} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('think')
    .setDescription("to think or to thonk")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who are you thinking about')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = think[Math.floor(Math.random() * think.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} starts to think about ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts to think!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    