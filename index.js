const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

const token = 'NjU0MjAzMjA1NzY0NTEzNzk0.XfCIdA.3KafbwbC18YhcMuYsuCsVBqHc7c';

client.once('ready', () => {
    console.log('Bolt24 online')
})

client.on("message", (message) => {
    if (message.content.startsWith("/kick")) {
        var member = message.mentions.members.first();
        if (member != null) {
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
            }).catch(() => {
                message.channel.send("Access Denied");
            });
        } else {
            message.channel.send('use format \'@username\'');
        }
    }
});

client.login(token);