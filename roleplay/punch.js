const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {punch} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('punch')
    .setDescription("violence is never the answer, except when it is")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('punching victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = punch[Math.floor(Math.random() * punch.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} punches ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} shadow punches!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    