const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server')
    .addUserOption(option => 
        option.setName('target')
        .setDescription('The user that you are trying to ban')
        .setRequired(true))
        
        .addStringOption(option =>
            option.setName('reason')
            .setDescription('The reason that you are banning the user'))
            .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
            .setDMPermission(false),
            async execute(interaction) {

                //vars
                const member = interaction.options.getMember('target');
                const reason = interaction.options.getString('reason');

                //kicking
                try{
                await member.ban(reason);
                } catch (err) {
                    if(err)
                    return interaction.reply(`${err}`)
                }

                //updating the channel
                return interaction.reply({embeds:[{
                    title:`${member.user.username} was banned`,
                    description: `**Reason:** ${reason}`,
                }]})
            },
        };