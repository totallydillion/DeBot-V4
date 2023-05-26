const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user from the server')
    .addUserOption(option => 
        option.setName('target')
        .setDescription('The user that you are trying to kick')
        .setRequired(true))
        
        .addStringOption(option =>
            option.setName('reason')
            .setDescription('The reason that you are kicking the user'))
            .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
            .setDMPermission(false),
            async execute(interaction) {

                //vars
                const member = interaction.options.getMember('target');
                const reason = interaction.options.getString('reason');

                //kicking
                try{
                await member.kick(reason);
                } catch (err) {
                    if(err)
                    return interaction.reply(`${err}`)
                }

                //updating the channel
                return interaction.reply({embeds:[{
                    title:`${member.user.username} was kicked`,
                    description: `**Reason:** ${reason}`,
                }]})
            },
        };