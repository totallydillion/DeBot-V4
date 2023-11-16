const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {handhold} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('handhold')
    .setDescription("hold someones hand! it's wholesome")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose hand are you holding')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = handhold[Math.floor(Math.random() * handhold.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} shakes ${user.globalName || user.username}'s hand!` : `${interaction.member.nickname|| interaction.user.globalName} holds their own hand!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    