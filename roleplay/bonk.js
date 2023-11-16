const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {bonk} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bonk')
    .setDescription("sometimes, people deserve it")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who deserves the bonk?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = bonk[Math.floor(Math.random() * bonk.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} bonk'd ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} bonk'd themself!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    