const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {slap} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription("sorry there was a mosquito!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('mosquito victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = slap[Math.floor(Math.random() * slap.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} slaps ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} slaps themself!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    