const { SlashCommandBuilder } = require('discord.js');

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'november', 'december']
const webscrape = require('webscrape');
const scraper = webscrape.default();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('otd')
    .setDescription('Look up famous events that happened on a day in history!')
    .addStringOption(option => 
        option.setName('month')
        .setDescription('Month of the date that you are trying to find out the history of.'))
        .addIntegerOption(option => 
            option.setName('day')
            .setDescription('The day of the month that you are trying to find out the history of')),
            async execute(interaction) {
                
                //getting the date 
                let month = (interaction.options.getString('month')) ?? months[new Date().getMonth()];
                let day = (interaction.options.getInteger('day')) ?? new Date().getUTCDate();
                
                const url = `https://www.timeanddate.com/on-this-day/${month}/${day}/`;
                
                
                //scraping 
                const rawResult = await scraper.get(url);
                const rawHTML = rawResult.$(`section`).text();
                
                let cutUPHTML = rawHTML.split("\n");
                
                //getting the results from the scrape and organizing
                let Results = new Array();
                var isInTodayInHistory = false;
                
                //sorting out the results
                cutUPHTML.forEach(elem => {
                    if(elem.includes("Today in History" || "What Happened On This Day")){
                        isInTodayInHistory = true;
                    }
                    else if(elem.includes("Deaths" || "Births"))
                    isInTodayInHistory = false;
                    
                    if(isInTodayInHistory && elem.substr(0, 10).includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0) && elem.length > 40){
                        Results.push(`💭${elem}\n`)
                        }
                        
                    });
                    
                    
                    //sending message
                    return interaction.reply({embeds:[{
                        title:"On This Day In History:",
                        description: Results.join("\n"),
                        footer:{
                            text:`${month} ${day}`
                        }
                    }]})
                },
            };