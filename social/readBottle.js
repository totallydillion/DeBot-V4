const { SlashCommandBuilder } = require('discord.js');
const {Bottles} = require(`\\DBot4\\databases\\userMade\\bottles.json`);
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('readbottle')
    .setDescription('Read a message from a bottle that was sent out to sea!'),
        async execute(interaction) {
            fs.readFile(`\\DBot4\\databases\\userMade\\bottles.json`, 'utf-8', function(err, data) {
                if(err) throw err;
                
                let obj = JSON.parse(data);
                
                return interaction.reply({content: `${obj[Math.floor(Math.random() * obj.length)]}`, ephemeral: true})
            })
        }
    }