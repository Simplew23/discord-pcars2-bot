const Discord = require("discord.js"); 
const config = require("./config.json");

const embed = new Discord.RichEmbed()   
// richembed content ... 
module.exports = (embed);

message.channel.send({embed: {
    "url": "https://discordapp.com",
    "color": 6794509,
    "description": "Позиция в чемпионате",
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
