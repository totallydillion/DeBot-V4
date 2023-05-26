const { SlashCommandBuilder } = require('discord.js');
const webscrape = require('webscrape');
const scraper = webscrape.default();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bible')
		.setDescription('Get your daily dose of Jesus with the bible command!')
        .addStringOption(book => 
            book.setName('book')
            .setDescription('The name of the book in the Bible')
            .setRequired(true))
        .addIntegerOption(chapter => 
            chapter.setName('chapter')
            .setDescription('The chapter in the book')
            .setRequired(true))
        .addStringOption(verse => 
            verse.setName('verse')
            .setDescription('The verse(s) in the bible')
            .setRequired(true))
            .addStringOption(version =>
                version.setName('version')
                .setDescription('The version of the Bible you are trying to retrieve the verse from; Default: NIV')
                .setRequired(false)),
	async execute(interaction) {

        let book = interaction.options.getString('book');
        let chapter = interaction.options.getInteger('chapter');
        let verses = interaction.options.getString('verse');
        let version = interaction.options.getString('version') ?? "NIV";

        //run GetVerses, returns verses

        var OutputtedVerses = await GetVerses(book, chapter, verses, version);


        
        //output the results
        return interaction.reply({embeds:[{
            title:`${book} ${chapter}:${verses} | ${version.toUpperCase()}`,
            description: OutputtedVerses.substr(0, 4000),
            // color: colors.helpful,
        }]})
    }
    }

async function GetVerses(book, chapter, verses, version){//on getting a verse
    //read and scrape the webpage
    const defaultHTML = await scraper.get(`https://ibibles.net/quote.php?${version}-${book}/${chapter}:${verses}`);
    
    //get the body from the webpage, then split each new line, then join together with a new line.
    return defaultHTML.$(`body`).text().split("<br>").join("\n");
}