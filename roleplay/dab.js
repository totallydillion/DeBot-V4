const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {dab} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dab')
    .setDescription("on those haters!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose hating?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = dab[Math.floor(Math.random() * dab.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} dabs on ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} dabs on the haters!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    