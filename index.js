const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjU0MjAzMjA1NzY0NTEzNzk0.XfPh1w.B5PKP2p5_MpL_Vb087EhNhiWd8k';

client.once('ready', () => {
    console.log('Bolt24 is now online')
})

client.on("message", (message) => {
    if (message.content.startsWith("-kick")) {
        var member = message.mentions.members.first();
        if (member != null) {
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
            }).catch((error) => {
                console.error(error);
            });
        } else {
            message.channel.send('use format \'@username\'');
        }
    }
    if (message.content === '-marco') {
        message.channel.send('Polo');
    }
    if (message.content === '-ping') {
        message.channel.send('Pong');
    }
});

client.login(token);
