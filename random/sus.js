const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('sus')
		.setDescription('Run a suscheck')
		.addUserOption(option => 
			option.setName('user')
			.setDescription('The user in question')),
	async execute(interaction) {
        let user = interaction.options.getMember('user') || interaction.user;

        let randomNumber = Math.floor(Math.random() * 100);
        let text;

        if(randomNumber > 0 && randomNumber <= 25)
        text = "Not too sus, I guess.";
        
        else if(randomNumber >= 26 && randomNumber <= 51)
        text = "In my opinion, that's kind of sus";
        
        else if(randomNumber >= 52 && randomNumber <= 76)
        text = "Pretty Sus, If I may add.";

        else if(randomNumber >= 77 && randomNumber <= 98)
        text = "That's like, Omegasus to me.";

        else if(randomNumber >= 99 && randomNumber <= 100)
        text = "Might as well be the definition of sus.";

        return interaction.reply({embeds:[{
            title:`Sus Check`,
            description:`${user.globalName} is **${randomNumber}%** Sus.\n${text}`
        }]})

	},
};
