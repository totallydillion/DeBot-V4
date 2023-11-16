const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {cry} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cry')
    .setDescription("Must just be some onions")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who else is crying')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');

            //getting a random gif
            let randomGif = cry[Math.floor(Math.random() * cry.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} cries with ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts crying!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    