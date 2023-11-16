const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {highfive} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('highfive')
    .setDescription("Hurray!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who are you highfiving?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = highfive[Math.floor(Math.random() * highfive.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} highfives ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} high fives themself`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    