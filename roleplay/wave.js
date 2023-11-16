const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {wave} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wave')
    .setDescription("hello!")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('waving victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = wave[Math.floor(Math.random() * wave.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} waves at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} waves`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    