const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {cuddle} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cuddle')
    .setDescription("cuddles are great")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose getting your warmth')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');

            //getting a random gif
            let randomGif = cuddle[Math.floor(Math.random() * cuddle.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} cuddles with ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} cuddles alone!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    