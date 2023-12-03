const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gaycheck')
    .setDescription('Check how gay someone is [jokingly]')
    .addUserOption(option => 
        option.setName('user')
        .setDescription('Who are you checking for their homoness?')),
            async execute(interaction) {
                let user = interaction.options.getUser('user') ?? interaction.user;
                let results = Math.floor(Math.random() * 100)

                return interaction.reply({embeds:[{
                    title:"Gay Check",
                    description: "🏳️‍🌈 **" + user.globalName +  "** is **" + results + "%** Gay. 🏳️‍🌈",
                    // color : 0xff0000,
                }]
            })
        }
    }
