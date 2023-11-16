const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {punt} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('punt')
    .setDescription("it's like kicking, but more wholesome")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('punting victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = punt[Math.floor(Math.random() * punt.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} punts ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} punts themself`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    