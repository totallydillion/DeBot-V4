const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {nod} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('nod')
    .setDescription("yes yes, i couldn't of said it better myself")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose getting the nod?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = dab[Math.floor(Math.random() * dab.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} nods at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} nods!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    