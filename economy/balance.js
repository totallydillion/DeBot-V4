const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('balance')
    .setDMPermission(false)
    .setDescription('View your balance in the Perry Bot!')
    .addUserOption(option => 
        option.setName('user')
        .setDescription('Whose balance would you like to check?')
        .setRequired(false)),
        async execute(interaction) {
            
            //variables
            const target = interaction.options.getUser('user') || interaction.user;
            let userID = target.id;
            
            
            //get that users balance
            let balance = await this.getBalance(userID);
            
            //display it
            return interaction.reply({embeds:[{
                title:`${target.globalName}`,
                description: `Balance: ${balance.balance} | Bank : ${balance.bank}`
            }]})
        },
        async getBalance(userID){
            var data = fs.readFileSync(`\\DBot4\\databases\\userSpecific\\balances.json`);

            var objects = JSON.parse(data);
            let specificObject;
            
            
            //for every balance object, find the one with the userID mentioned
            await objects.forEach(objekt => {
                if(objekt.id == userID)
                {
                    specificObject = objekt;
                }
            });
            
            //if it is there, return that specific balance
            if(specificObject){
                return specificObject;
                
            }
            
            //if there is no data, create a template
            let newData = {
                "id": userID,
                "balance": 0,
                "bank": 0
            }
            
            //push the new data
            objects.push(newData)
            
            //make it JSON-compatible
            let updatedData = JSON.stringify(objects);
            
            //save it
            fs.writeFile(`\\DBot4\\databases\\userSpecific\\balances.json`, updatedData, err => {
                if(err) throw err;
                
                //unless there is an error, we should be good
            })
            
            //return that users balance
            return newData;
        }
    }
