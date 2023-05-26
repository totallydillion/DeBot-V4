const { SlashCommandBuilder } = require('discord.js');
const {Bottles} = require(`\\DBot4\\databases\\userMade\\bottles.json`);
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('writebottle')
    .setDescription('Write a message in a bottle, and send it out to sea!')
    .addStringOption(option => 
        option.setName('message')
        .setDescription('A message that you are sending out to sea!')
        .setRequired(true)
        .setMaxLength(100)
        ),
        async execute(interaction) {
            const message = interaction.options.getString('message');

            fs.readFile(`\\DBot4\\databases\\userMade\\bottles.json`, 'utf-8', function(err, data) {
                if(err) throw err;
                
                let obj = JSON.parse(data);
                
                obj.push(message);
                fs.writeFile('\\DBot4\\databases\\userMade\\bottles.json', JSON.stringify(obj), 'utf-8', function(err) {
                    if (err) throw err
                    
                    return interaction.reply({content: "Your message has been sent out to sea, to read a random message, type /readbottle !", ephemeral: true});
                })
            })
        }
    }