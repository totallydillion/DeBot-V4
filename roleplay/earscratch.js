const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {earscratch} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('earscratch')
    .setDescription("it is actually nice")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('whose ear are you scratching?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = earscratch[Math.floor(Math.random() * earscratch.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} scratches ${user.globalName || user.username}'s ear!` : `${interaction.member.nickname|| interaction.user.globalName} scratches their ear`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    