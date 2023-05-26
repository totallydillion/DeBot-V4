const { SlashCommandBuilder } = require('discord.js');
const webscrape = require('webscrape'); //for scraping websites
var scraper = webscrape.default(); //for scraping websites

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fact')
		.setDescription('Get a random fact!'),
	async execute(interaction) {
        let rawResults = await scraper.get(`https://uselessfacts.jsph.pl/random.json?language=en`)


        return interaction.reply(rawResults.json.text.toString());

	},
};