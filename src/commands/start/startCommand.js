const { commandsList, commandsMarkup } = require("../../config/commandsList");

module.exports = {
  command: commandsList.start,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    await bot.sendSticker(
      chatId,
      "https://tlgrm.ru/_/stickers/a03/378/a03378c3-122f-314c-9f3f-c03ec9f00561/1.jpg",
    )
    await bot.sendMessage(
      chatId, 
      "Добро пожаловать 🫡. Здесь ты можешь узнать статус воды 💦 в своем жилище или установить статус текущего состояния.\n\nВот список команд:",
      commandsMarkup,
    );
  }
}

