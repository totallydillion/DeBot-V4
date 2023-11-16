const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {yawn} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('yawn')
    .setDescription("starting to get tired")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('yawning victim')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = yawn[Math.floor(Math.random() * yawn.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} yawns at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} yawns!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    