const commandsMarkup = require("../config/commandsList");

const start = async (msg, bot) => {
  const chatId = msg.chat.id;
  await bot.sendMessage(
    chatId,
    "Добро пожаловать 🫡. Здесь ты можешь узнать статус воды 💦 в своем жилище или установить статус текущего состояния"
  );
};

module.exports = { start };
