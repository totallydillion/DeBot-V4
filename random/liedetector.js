const { SlashCommandBuilder } = require('discord.js');
const lieResponses = new Array("||TOLD TRUTH||", "||LIE DETECTED||", "Inconclusive, please try again.") 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('liedetector')
		.setDescription('The totally most accurate way to tell if someone is lying!')
        .addUserOption(options => 
            options.setName('victim')
            .setDescription('lorem ipsum')
        ),
	async execute(interaction) {
        let victim = interaction.options.getUser('victim') || interaction.user
        
        return interaction.reply({embeds:[{
            title: "Lie Detector",
            description: `**${victim.globalName}**'s Lie Detector Results: \n\n**${lieResponses[Math.floor(Math.random()*lieResponses.length)]}**`,
        }]})

	},
};
