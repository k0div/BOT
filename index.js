const discord = require("discord.js");
const bot = new discord.Client();

bot.on("message", (message) => {
    if(message.content == "!teste"){
        //message.reply("Teste Concluido!");
        message.channel.sendMessage("Teste Concluido!");
    }
});

bot.login(process.env.BOT_TOKEN);
