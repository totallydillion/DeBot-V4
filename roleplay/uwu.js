const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {uwu} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('uwu')
    .setDescription("*blushing intensifies*")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('wholesome person')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = uwu[Math.floor(Math.random() * uwu.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} is starting to uwu at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} uwus!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    