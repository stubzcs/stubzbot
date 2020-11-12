const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'info', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle('StubZ')
      .setURL('https://www.youtube.com/watch?v=BjDebmqFRuc&ab_channel=MrMeme')
      .setThumbnail('https://pngimg.com/uploads/youtube/youtube_PNG14.png')
      .setColor('#f00232')
      .addField('This Server is Sponsored By This Video.', '#Rick Roll')
      .setTimestamp()
      .setFooter("StubZ and Friends", "https://cdn.discordapp.com/app-icons/771692492386992179/893aa9ee9a53a738047b7a9069f44e90.png?size=64");
  
    await message.channel.send(youtubeEmbed).catch(err => console.log(err));
  }
}