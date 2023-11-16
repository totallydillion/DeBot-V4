const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');
const {lick} = require(`\\DBot4\\databases\\social\\roleplayGifs.json`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName('lick')
    .setDescription("slrrp")
    .addUserOption(option => 
        option.setName('target')
        .setRequired(false)
        .setDescription('slrrp slrrp slrrp slrrp?')),
        
        async execute(interaction) {
            //getting user

            let user = interaction.options.getUser('target');


            //getting a random gif
            let randomGif = lick[Math.floor(Math.random() * lick.length)];

            //sending
            return interaction.reply({embeds:[{
                title: user ? `${interaction.member.nickname || interaction.user.globalName} licks ${user.globalName || user.username}!` : `${interaction.member.nickname|| interaction.user.globalName} starts licking!`,
                image: {
					url: randomGif
				}
            }]})

        }
    }
    