const {SlashCommandBuilder} = require('discord.js');
const fs = require('fs');

var data = fs.readFileSync(`\\DBot4\\databases\\social\\profiles.json`)
var profiles = JSON.parse(data);


module.exports = {
    data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('View a profile!')
    .addUserOption(user => 
        user.setName("user")
        .setDescription('The profile you are trying to view')
        .setRequired(false)),
        async execute(interaction){
            
            //who are we trying to get a profile of?
            let target = interaction.options.getUser('user') || interaction.user;
            
            //get the profile
            let profile = await this.getProfile(target.id);
            
            //display profile
            return interaction.reply({embeds:[{
                title:`${target.globalName} | ${profile.userPronouns}`,
                description: profile.userBio,
                footer:{
                    text:`Birthday: ${profile.userBirthday} | Status: ${profile.Relationship.Status == 'Single' ? "Single" : `Taken`}`
                }
            }]})
        },
        async createProfile(ID){
            let userProfile;
            
            await profiles.forEach(profile => {
                if(profile.userID == ID)
                return userProfile = profile;
            })
            
            if(!userProfile){
                //creating a profile

                //default settings
                let newProfile = {
                    "userID": ID,
                    "userBio": "No Bio",
                    "userBirthday": "No Birthday Set",
                    "userPronouns": "No Pronouns Set",
                    Relationship:{
                        "Status": "Single",
                        "Lover": "NA",
                        "Engagement Date": "NA"
                    }
                }
                
                //pushing it into file
                profiles.push(newProfile);
                
                //jsonifying
                let newData = JSON.stringify(profiles);
                
                //saving
                fs.writeFile(`\\DBot4\\databases\\social\\profiles.json`, newData, err => {
                    if(err) throw err;
                })
                
                return newProfile;
                
            }
            else 
            return new Error("Trying to create a profile for a user that already has a profile!")
        },
        
        async getProfile(ID){
            let userProfile;
            
            await profiles.forEach(profile => {
                if(profile.userID == ID)
                return userProfile = profile;
            })
            
            if(!userProfile)
            {
                console.log("User does not have a profile, creating one now!");
                userProfile = await this.createProfile(ID);
            }
            
            return userProfile;
        }
    }
