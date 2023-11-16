const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {hmph} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hmph')
    .setDescription("the pouting is real:(")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose making you pout')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = hmph[Math.floor(Math.random() * hmph.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} hmphs at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} hmphs`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    