const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {clap} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clap')
    .setDescription("Round of applause!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('person you are clapping for')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = clap[Math.floor(Math.random() * clap.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} claps for ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts clapping!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    