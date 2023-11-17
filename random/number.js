const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('number')
    .setDescription('Get a random number!')
    .addIntegerOption(option => 
        option.setName('min')
        .setRequired(false)
        .setMinValue(0)
        .setDescription('The minimum output'))
        .addIntegerOption(option => 
            option.setName('max')
            .setDescription('The maximum output')
            .setMinValue(0)
            .setRequired(false)),
            async execute(interaction) {
                //declaring
                let min = interaction.options.getInteger("min")
                let max = interaction.options.getInteger("max");
                
                
                //error handling
                if(max < min) return interaction.reply("The minimum number is higher than the maximum number!");
                
                else if (min && max){
                   return interaction.reply((Math.floor(Math.random() * max + min)).toString())
                }
                
                else{
                    let random = Math.floor(Math.random() * 2000000).toString();
                    
                    return interaction.reply(random)
                }
            }
        }
        