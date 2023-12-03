const balance = require('./balanceManager');
const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('pay')
    .setDescription('Pay another user some of your money!')
    .setDMPermission(false)
    .addUserOption(option =>
        option.setName('user')
        .setDescription('the user that you are trying to pay money to')
        .setRequired(true))
        .addIntegerOption(amount =>
            amount.setName('amount')
            .setDescription('how much are you trying to pay to [user]')
            .setRequired(true)
            .setMinValue(0)
            .setRequired(true)),
            async execute(interaction) {
                //variable setting 
                const paidUser = interaction.options.getUser('user');
                const payingUser = interaction.user;
                const amountBeingPaid = interaction.options.getInteger('amount');

                let currentStats = await balance.getBalance(payingUser.id);
                
                //user does not have anough
                if(currentStats.bank < amountBeingPaid)
                return interaction.reply({ content: 'You do not have enough to make this transaction!', ephemeral: true });
                
                else{
                    //if the user does have enough

                    //give it to the user being paid
                    await balance.AdjustBalance(paidUser, amountBeingPaid, payingUser);

                    //inform the user
                    return interaction.reply(`You have successfully paid ${paidUser.globalName}, ${amountBeingPaid}!`)
                }
            }
        }
