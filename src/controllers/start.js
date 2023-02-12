const commandsMarkup = require("../config/commandsList");

const start = async (msg, bot) => {
  const chatId = msg.chat.id;
  await bot.sendSticker(
    chatId,
    "https://tlgrm.ru/_/stickers/a03/378/a03378c3-122f-314c-9f3f-c03ec9f00561/1.webp",
  )
  await bot.sendMessage(
    chatId, 
    "Добро пожаловать 🫡. Здесь ты можешь узнать статус воды 💦 в своем жилище или установить статус текущего состояния.\n\nВот список команд:",
    {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{text: "Включить воду", callback_data: "wateron"}],
          [{text: "Выключить воду", callback_data: "wateroff"}],
          [{text: "Узнать статус воды", callback_data: "waterstat"}],
        ]
      })
    }
  );
}

module.exports = { start };