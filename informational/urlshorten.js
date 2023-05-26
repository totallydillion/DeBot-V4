const { SlashCommandBuilder } = require('discord.js');
const webscrape = require('webscrape');
const scraper = webscrape.default();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('urlshorten')
		.setDescription('Shorten a url!')
        .addStringOption(str => 
            str.setName('url')
            .setDescription('The URL you are trying to shorten')
            .setRequired(true)),
	async execute(interaction) {

        const html = `https://api.shrtco.de/v2/shorten?url=${interaction.options.getString('url')}`;

        let res = await scraper.get(html);

        if(!res.json.result.short_link)
        return interaction.reply("An error has occured!")

        else 
        return interaction.reply({content: `https://www.${res.json.result.short_link}`});
    }
}