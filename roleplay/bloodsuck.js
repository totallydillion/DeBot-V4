const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {bloodsuck} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bloodsuck')
    .setDescription("uwu")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('Who are you trying to bloodsuck?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = bloodsuck[Math.floor(Math.random() * bloodsuck.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} just sucked some blood from ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} just absorbed their own blood!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    