const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {walk} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('walk')
    .setDescription("Walks are great for clearing the head!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('walking companion')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = walk[Math.floor(Math.random() * walk.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} walks with ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} goes on a walk!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    