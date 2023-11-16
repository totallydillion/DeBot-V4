const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {blush} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('blush')
    .setDescription("Sometimes, it's just a mood :3")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose making you blush')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = blush[Math.floor(Math.random() * blush.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} blushes at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} blushes!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    