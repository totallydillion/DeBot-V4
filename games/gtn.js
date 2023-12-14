const { SlashCommandBuilder } = require('discord.js');

var users = [];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gtn')
    .setDescription('Play a game of Guess The Number!'),
    async execute(interaction) {
        
        //if the user is already playing , let them know
        if(users.includes(interaction.user.id))
        return interaction.reply("You already have a game that has started!");
        
        //otherwise, start the game
        await interaction.reply({embeds:[{
            title:`A Guess The Number Game Has Started!`,
            description:`${interaction.user}, please guess a number between 1 and 100 to begin!`
        }], fetchReply: true})
        .then(function(message) {
            
            //push them into the playing array
            users.push(interaction.user.id);

            //get a random number
            const number = Math.floor(Math.random() * 99) + 1;
            
            //game properties
            var game = {
                user: interaction.user.id,
                turns: 5,
                guesses: [],
                num: number
            }
            
            //create a listener
            const gameFilter = m => m.author.id == interaction.user.id;
            const collector = message.channel.createMessageCollector({filter: gameFilter, time: 60_000})
            

            //when the user sends a message
            collector.on('collect', m => {

                //turn it into an int
                let guess = parseInt(m.content);

                if(guess != game.num){
                    game.guesses.push(`${guess} (${guess > game.num ? "Lower" : "Higher"})`);
                    game.turns--;
                    
                    if(game.turns != 0){ // wrong answer
                       //interaction.channel.send(`\n**${game.turns}** Turns Remaining!`)
                       message.edit({embeds:[{
                            title:`${game.turns} Attempts Remaining!`,
                            description:`The Number is ${guess > game.num ? "**Lower":"**Higher"} than ${guess}**!\n**__Guesses__**\n${game.guesses.join('\n')}`
                        }]})

                    }
                    else { // game over
                        message.edit({embeds:[{
                            title:`Game Over!`,
                            description:`The Winning Number Was: **${game.num}**\n**__Guesses__**\n${game.guesses.join('\n')}`
                        }]})
                        collector.stop();
                    }
                }
                else if(guess == game.num){ //correct
                    message.edit({embeds:[{
                        title:`Correct!`,
                        description:`You have guessed the winning number: **${game.num}** \n**__Guesses__**\n${game.guesses.join("\n")}`
                    }]})
                    collector.stop();
                }
            })
            collector.on('end', () => {
                users.splice(users.indexOf(game.user), 1);
                return;
            })
        })
        
    },
}
