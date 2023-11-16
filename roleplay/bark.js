const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {bark} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bark')
    .setDescription('Bark at someone, or something.')
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('Who are you trying to bark at?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = bark[Math.floor(Math.random() * bark.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} barked at ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts barking!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    