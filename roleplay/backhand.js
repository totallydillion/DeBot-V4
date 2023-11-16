const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {backhand} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('backhand')
    .setDescription('Backhand someone; or yourself.')
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('Who are you trying to backhand?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');

            //getting a random gif
            let randomGif = backhand[Math.floor(Math.random() * backhand.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} backhanded ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} backhanded themselves!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    