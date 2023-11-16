const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {eek} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('eek')
    .setDescription("excited but can't show it?")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('who is making you eek')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = eek[Math.floor(Math.random() * eek.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} eeks at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} eeks!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    