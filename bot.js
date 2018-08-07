/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDc2MDMxMjE0MzIzNDk5MDA4.DknrFg.BDlz2RUXczQrbT4iidM-kGKMPXk';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'me') {
    // Send the user's avatar URL
    message.channel.send({embed: {
      "url": "https://discordapp.com",
      "color": 6794509,
      "description": "????????????????????",
      timestamp: new Date(),
      "footer": {
        "text": "PCars2 on MARS"
      },
      "thumbnail": {
        icon_url: message.author.displayAvatarURL,
      },
      "author": {
        name: message.author.username,
        "url": "https://discordapp.com",
        icon_url: message.author.displayAvatarURL,
      },
      "fields": [
        {
          "name": "Уровень: ``ПРОФЕССИОНАЛ``",
          "value": "-"
        },
        {
          "name": "Побед:",
          "value": "4",
          "inline": true
        },
        {
          "name": "Побед в команде:",
          "value": "6",
          "inline": true
        },
        {
          "name": "Турниров:",
          "value": "20",
          "inline": true
        },
        {
          "name": "Рекорд круга",
          "value": "1",
          "inline": true
        },
        {
          "name": "Личный зачет:",
          "value": "??: 5   ??: 2   ??: 3",
          "inline": true
        },
        {
          "name": "Командный зачет:",
          "value": "??: 1     ??: 2     ??: 3",
          "inline": true
        },
        {
          "name": "Достижения:",
          "value": "```1-ое место лояльности в Season #1``````2-ое место успешности в Season #1```",
          "inline": true
        }
      ]
    }});
  }
});

// Log our bot in
client.login('NDc2MDMxMjE0MzIzNDk5MDA4.DknrFg.BDlz2RUXczQrbT4iidM-kGKMPXk');
