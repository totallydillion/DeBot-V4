const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {hydrate} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hydrate')
    .setDescription("it is important!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who are you reminding to hydrate?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = hydrate[Math.floor(Math.random() * hydrate.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} reminds ${user.globalName || user.username} that it is important to hydrate!` : `${interaction.member.nickname|| interaction.user.globalName} hydrates!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    