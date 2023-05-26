//this is the API used to webscrap
const webscrape = require('webscrape');
const scraper = webscrape.default();

//all of the months of the year
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('fbday')
    .setDescription('Get the birthdays of celebrities on a date!')
    .addStringOption(option => 
        option.setName('month')
        .setDescription('month of the year'))
        .addIntegerOption(option => 
            option.setName('day')
            .setDescription('day of the month')),
            async execute(interaction) {
                
                let month = interaction.options.getString('month');
                let day = interaction.options.getInteger('day');
                
                //if there is no month or day that was provided
                if(!month || !day){
                    
                    //default it to the  current day
                    let currentDate = new Date();
                    
                    month = monthsOfTheYear[currentDate.getMonth()];
                    day = currentDate.getDate();
                }
                
                //raw result
                const rawResult = await scraper.get(`https://www.famousbirthdays.com/${(month + day).toLowerCase()}.html`)
                
                //splitting
                let html = (rawResult.$(`div`).text()).split("\n");
                let celebBirthdays = []
                
                html.map(content => {
                    //filtering out the results
                    if(!content.includes("google") && content != "" && content.includes(",")){
                        if(!celebBirthdays.includes(content))
                        celebBirthdays.push(content)
                    }
                })
                
                //to prevent the embed being too spammy and clogging the chat, this is to split the results
                let middle = Math.ceil(celebBirthdays.length / 2)
                
                let firstHalf = celebBirthdays.splice(0, middle);
                let secondHalf = celebBirthdays.splice(-middle)
                
                
                return interaction.reply({embeds:[{
                    title:`Happy Birthday To...`,
                    fields:[{
                        name:`\u200b`,
                        value: firstHalf.join("\n").substring(0, 1024),
                        inline: true
                    },{
                        name:'\u200b',
                        value: secondHalf.join('\n').substring(0, 1024),
                        inline: true
                    }]
                }]})
                
            }
        }