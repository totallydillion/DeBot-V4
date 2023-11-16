const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {handshake} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('handshake')
    .setDescription("When it is time to be professional.")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('Who are you being professional with?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = handshake[Math.floor(Math.random() * handshake.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} handshakes ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} practices their handshake!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    