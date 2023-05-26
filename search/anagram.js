const { SlashCommandBuilder } = require('discord.js');
const englishWords = require('\\DBot4\\databases\\predefined\\EnglishWords.json').words;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('anagram')
    .setDescription('Find all of the words that you can make out of certain letters!')
    .addStringOption(str => 
        str.setName('letters')
        .setDescription('The letters you are trying to make a word out of')
        .setRequired(true)),
        async execute(interaction) {
            
            let entry = interaction.options.getString('letters');
            let wordArray = [] //Initialize an empty word array.
            
            
            const alphabeticCharactersOnly = /^[A-Za-z]+$/g
            
            if (!alphabeticCharactersOnly.test(entry)) {
                return interaction.reply({content:'Your input contains non alphabetic characters.', ephemeral: true});
            }
            
            for (i = 0; i < englishWords.length; i++) { //Iterate over each of the words in the English dictionary.
                
                let tempEntry = entry //Dupicate the entry of letters to test (and then reset again) against each word in the English dictionary.
                let englishWordLetters = englishWords[i].split('') //Split said Engilsh word into an array of its individual letters.
                
                let letterArray = [] //Initialize a letter array to which letters in said English word that match letters in entry can be pushed.
                
                for (j = 0; j < englishWordLetters.length; j++) { //Iterate over each of the letters in said Engish word.
                    
                    if (tempEntry.includes(englishWordLetters[j])) {
                        letterArray.push(englishWordLetters[j]) //If entered letters include said letter in English word, push said letter to the letter Array.
                        
                        tempEntry = tempEntry.replace(englishWordLetters[j],'&').split('&').join('') //Within the span of testing each word, update the entry temporarily by omitting the tested letter so that words with more than one instance of a matching letter do not test positive if there are not more than one instance of the letter in the entry. JavaScripts array library is relativeyl sparse, so the way to do this was to replace the first instance of said letter with a random character (an '&' in this case), the split at the random character, join the array back together and set equal again to a the temporary instance of the entry.
                        
                    }
                }
                
                if (letterArray.join('') === englishWords[i]) { //If the constructed letter array joined equals said english word, push that word to the word array
                    wordArray.push(englishWords[i])
                }
                
            }
            let combinedWords = wordArray.join(", ");
            
            if(combinedWords.length > 4000)
            return interaction.reply({content:'There are too many results!', ephemeral: true});
            
            if(wordArray.length > 0)
            return interaction.reply({embeds:[{
                title:`Words Found With ${entry}`,
                description: wordArray.join(', ')
            }]
        })
        else 
        return interaction.reply({content:'There are no words that you can make with those letters!', ephemeral: true});

        
    }
}