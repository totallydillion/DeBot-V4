const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {dance} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dance')
    .setDescription("Life is a party!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose dancing with you?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = dance[Math.floor(Math.random() * dance.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} dances with ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} breaks into some dance moves!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    