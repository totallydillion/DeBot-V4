const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {growl} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('growl')
    .setDescription("be fierce")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who are you growling at')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = growl[Math.floor(Math.random() * growl.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} growls at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts growling`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    