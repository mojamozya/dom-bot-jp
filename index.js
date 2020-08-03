//ログイン処理
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('ready...');
});

client.on('message', async message => {
    if (message.content.startsWith('Randomly-generated Kingdom`\n')) {
        const secondRow = message.content.split('\n')[1];
        const cardsString = secondRow.slice(0, secondRow.length - 1);
        const cards = cardsString.split(', ');
        let sentMessages = [];
        for (const c of cards) {
            const msg = await message.channel.send('!text ' + c);
            msg.delete();
        }

        sleep(10 * 1000, function () {
            message.channel.send('!kingdom -k ' + cardsString);
            message.delete();
        })
    }
});
client.login(process.env.BOT_TOKEN);

function sleep(waitSec, callback) {
    setTimeout(callback, waitSec);
}