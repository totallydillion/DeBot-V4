const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {cough} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cough')
    .setDescription("must've gotten sick")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('coughing target')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');

            //getting a random gif
            let randomGif = cough[Math.floor(Math.random() * cough.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} coughs on ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts coughing!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    