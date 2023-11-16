const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {poke} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('poke')
    .setDescription("poke")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('poking victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = poke[Math.floor(Math.random() * poke.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} pokes ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} pokes everything they see`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    