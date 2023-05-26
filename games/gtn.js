const { SlashCommandBuilder } = require('discord.js');

var users = [];

//todo: make the game look better with embeds, as well as maybe have one message for all of the guesses, and only send empherial replies, and update one message

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gtn')
    .setDescription('Play a game of Guess The Number!'),
    async execute(interaction) {
        
        
        if(users.includes(interaction.user.id))
        return interaction.reply("You already have a game that has started!");
        
        await interaction.reply({content:"A Game Of Guess The Number Has Started! Please guess a number between 1-100", fetchReply: true})
        .then(function(message) {
            
            users.push(interaction.user.id);
            const number = Math.floor(Math.random() * 99) + 1;
            
            var game = {
                user: interaction.user.id,
                turns: 5,
                num: number
            }
            
            const gameFilter = m => m.author.id == interaction.user.id;

            
            const collector = message.channel.createMessageCollector({filter: gameFilter, time: 60_000})
            
            collector.on('collect', m => {

                let guess = parseInt(m.content);

                if(guess != game.num){
                    game.turns--;
                    
                    if(game.turns != 0){ // wrong answer
                       interaction.channel.send(`${guess > game.num ? "Lower!":"Higher!"}\n**${game.turns}** Turns Remaining!`)
                    }
                    else { // game over
                       interaction.channel.send(`Game over! The number was ${game.num}`);
                        collector.stop();
                    }
                }
                else if(guess == game.num){ //correct
                    interaction.channel.send("Correct!");
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