const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {push} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('push')
    .setDescription("move it or lose it!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('pushing victim?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = push[Math.floor(Math.random() * push.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} pushes ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} pushes the air!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    