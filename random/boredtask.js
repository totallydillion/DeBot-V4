const { SlashCommandBuilder } = require('discord.js');
const webscrape = require('webscrape');
const scraper = webscrape.default();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('boredtask')
    .setDescription('Get a random task for when you are bored!'),
    async execute(interaction) {
        
        const html = `https://www.boredapi.com/api/activity`;
        
        let res = await scraper.get(html);
        
        if(!res.json.activity)
        return interaction.reply("An error has occured!")
        
        else 
        return interaction.reply({embeds:[{
            title:`${res.json.activity}`,
            fields:[{
                name:'Type',
                value: `${res.json.type || "N/A"}`,
                inline: true,
            },
            {
                name:`People`,
                value: `${res.json.participants || "0"}`,
                inline: true,
            },
            {
                name: 'Cost',
                value: `~$${res.json.price}`,
                inline: true,
            },
        ]}]})
    }
}