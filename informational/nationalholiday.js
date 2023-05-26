const { SlashCommandBuilder } = require('discord.js');
const webscrape = require('webscrape');

var monthsOfTheYear = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];


module.exports = {
    data: new SlashCommandBuilder()
    .setName('nh')
    .setDescription('Get todays national holidays!'),
    async execute(interaction) {
        
        var todaysDate = "";
        let computerDate = new Date()
        todaysDate = (monthsOfTheYear[computerDate.getMonth()] + "-" + computerDate.getDate()).toLowerCase();
        
        //idk what this is for, but yes	
        var scraper = webscrape.default();
        
        // the result is the URL that you are trying to scrape from
        const result = await scraper.get('https://www.nationaltoday.com/' + todaysDate + "-holidays/");
        
        //rawHTML = all of the source code
        let rawHTML = result.$(`h3`).text().split("Day");
        
        let holidays = [];
        
        /* fixing so there is no "About Us" type of things */
        for (var i =0 ; i< rawHTML.length; i++){
            if(!rawHTML[i].toLowerCase().includes("day"))
            holidays.push(rawHTML[i] + " Day");
        }
        //sending the message in a discord embed
        return interaction.channel.send({embeds:[{
            title: monthsOfTheYear[computerDate.getMonth()].toUpperCase() + ' ' + computerDate.getDate() + ", " + computerDate.getFullYear(),
            description : holidays.join("\n"),
            footer: {
                text: "This information is provided by holidayscalendar.com"
            }
        }	]
    })
}}