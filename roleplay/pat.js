const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {pat} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pat')
    .setDescription("pat someone like a cat or something like that")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('patting victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = pat[Math.floor(Math.random() * pat.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} pats ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} pats themself!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    