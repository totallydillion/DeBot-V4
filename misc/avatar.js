const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('av')
		.setDescription('Get a users avatar!')
        .addUserOption(options => 
            options.setName('target')
            .setDescription('The user that you are trying to get the avatar of')),
	async execute(interaction) {
		const target = interaction.options.getUser('target') || interaction.user;

        return interaction.reply({embeds:[{
            title:`${target.username}'s Avatar`,
            image:{
                url: `${target.displayAvatarURL({size: 1024, dynamic: true})}`
            }
        }]})
        
	},
};