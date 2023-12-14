const balance = require('./balanceManager');
const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');

const dailyAmount = 250;

//there is a bug where if the bot resets, there is a way to claim your daily again.

module.exports = {
    cooldown: 86400,
    data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Get your daily amount of money!'),
    async execute(interaction) {
        
        //making sure that the user has a balance
        let userBalance = (await balance.getBalance(interaction.user.id));

        //updating balance
        await balance.AdjustBalance(interaction.user, dailyAmount);

        //displaying new balance
        return interaction.reply({embeds:[{
            title:'Daily Money Claimed!',
            description:`New Balance:\n${userBalance.balance} -> **${userBalance.balance + dailyAmount}**`
        }]})

    }
}
