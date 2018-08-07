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
          "value": users[message.author.id].victory,
          "inline": true
        },
        {
          "name": "Побед в команде:",
          "value": users[message.author.id].team_victory,
          "inline": true
        },
        {
          "name": "Турниров:",
          "value": users[message.author.id].tournament_count,
          "inline": true
        },
        {
          "name": "Рекорд круга",
          "value": users[message.author.id].lap_record,
          "inline": true
        },
        {
          "name": "Личный зачет:",
          "value": users[message.author.id].personal_score,
          "inline": true
        },
        {
          "name": "Командный зачет:",
          "value": users[message.author.id].team_score,
          "inline": true
        },
        {
          "name": "Достижения:",
          "value": users[message.author.id].achievements,
          "inline": true
        }
      ]
    }}); 
  }
});

// Log our bot in
client.login(config.token);
