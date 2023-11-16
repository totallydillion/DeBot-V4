const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {hug} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription("what is wrong with a cozy hug?")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('hug target')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = hug[Math.floor(Math.random() * hug.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} hugs ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} hugs themselves!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    