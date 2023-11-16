const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {kiss} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription("Mwah!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose getting smooched?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = kiss[Math.floor(Math.random() * kiss.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} kisses on ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} kisses themself!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    