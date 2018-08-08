// Bot for reply PCars2 stats for player

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
const config = require("./config.json");

var fs = require('fs');

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = "!";

// Create an event listener for messages
client.on('message', message => {
  if (message.content === prefix + 'me') {

    try {
      var obj = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
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
          "value": obj[message.author.id].level,
        },
        {
          "name": "Побед:",
          "value": obj[message.author.id].victory,
          "inline": true
        },
        {
          "name": "Побед в команде:",
          "value": obj[message.author.id].team_victory,
          "inline": true
        },
        {
          "name": "Турниров:",
          "value": obj[message.author.id].tournament_count,
          "inline": true
        },
        {
          "name": "Рекорд круга",
          "value": obj[message.author.id].lap_record,
          "inline": true
        },
        {
          "name": "Личный зачет:",
          "value": obj[message.author.id].personal_score,
          "inline": true
        },
        {
          "name": "Командный зачет:",
          "value": obj[message.author.id].team_score,
          "inline": true
        },
        {
          "name": "Достижения:",
          "value": obj[message.author.id].achievements,
          "inline": true
        }
      ]
    }})} catch (err) {
      message.channel.send("Прости, но ты еще не участвовал в турнирах. Но можешь принять, ближайший турнир смотри в #standigs");
      return
    };
  }
});

// Log our bot in
client.login(config.token);
