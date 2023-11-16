const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {wink} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wink')
    .setDescription("winkity wonkity")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('winking victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = wink[Math.floor(Math.random() * wink.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} winks at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} winks!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    