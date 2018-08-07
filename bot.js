/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
const config = require("./config.json");
const users = require("./users.json");

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = "!";

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix + 'me') {

    // Send the user's avatar URL
    message.channel.send({embed: {
      "url": "https://discordapp.com",
      "color": 6794509,
      "description": "Позиция в чемпионате",
      timestamp: new Date(),
      "footer": {
        "text": "Project Cars 2 on MARS"
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
          "name": "Уровень:",
          "value": users[message.author.id].level,
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
          "value": "1-ое место лояльности в Season #1 2-ое место успешности в Season #1",
          "inline": true
        }
      ]
    }}); 
  }
});

// Log our bot in
client.login(config.token);
