const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {kill} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kill')
    .setDescription("because some people find it fun i guess")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose being unalived?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = kill[Math.floor(Math.random() * kill.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} kills ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} dies!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    