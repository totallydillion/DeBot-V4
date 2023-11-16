const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {boop} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('boop')
    .setDescription("beepity bopity")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose getting bopity')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = boop[Math.floor(Math.random() * boop.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} booped ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} just booped themselves!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    