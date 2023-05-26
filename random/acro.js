const { SlashCommandBuilder } = require('discord.js');
const {words} = require(`\\DBot4\\databases\\predefined\\EnglishWords.json`);

// start of discord stuff
module.exports = {
    data: new SlashCommandBuilder()
    .setName('acronym')
    .setDescription('Get an acronym on letters')
    .addStringOption(option => 
        option.setName('letters')
        .setDescription('lorem ipsum')
        .setRequired(true)
        .setMaxLength(26)
        ),
        async execute(interaction) {
            //end of discordstuff
            
            //get the user input
            let letters = interaction.options.getString('letters');
            
            //the acronym being sent
            let acro = [];
            
            //all of the words with the same letter
            let wordsWithSameLetter = []
            
            for(var i = 0; i < letters.length; i++){
                words.map(words => { 
                    if(words[0] == letters[i])
                    { //if it has the same letter, push into array
                        wordsWithSameLetter.push(words)
                        
                    }
                })
                // push random word to the array that is being sent out
                acro.push(wordsWithSameLetter[Math.floor(Math.random() * wordsWithSameLetter.length)])
                
                //after getting acro, reset array
                wordsWithSameLetter = [];
            }
            
            //send results
            return interaction.reply(acro.join(" "))
        },
    };