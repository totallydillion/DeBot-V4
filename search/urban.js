const { SlashCommandBuilder } = require('discord.js');
const {request} = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ud')
    .setDescription('Search something on Urban Dictionary!')
    .addStringOption(options => 
        options.setName('search')
        .setDescription('The word or phrase that you are trying to search! default: random')),
        async execute(interaction) {
            const term = interaction.options.getString('search');
            var dictResult;

            if(!term) dictResult = await request(`https://api.urbandictionary.com/v0/random`);

            else{
            const query = new URLSearchParams({term});
            dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`);
            }


            const {list} = await dictResult.body.json();
            
            const res = list[0];
            
            if(!list.length)
            return interaction.reply(`There was no results found for **${term}**.`)
            
            interaction.reply({embeds:[{
                title: res.word,
                thumbnail:{
                    url: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Urban_Dictionary_logo.svg/512px-Urban_Dictionary_logo.svg.png?20180302232617`,
                },
                fields:[{
                    name:`Description`,
                    value:`${res.definition.substring(0, 1024)}`
                },
                {
                    name:`Example`,
                    value: `${res.example}`
                }],
                footer:{
                    text:`👍 ${res.thumbs_up} | 👎 ${res.thumbs_down}\n${res.author}`
                }
            }]})
        },
    };