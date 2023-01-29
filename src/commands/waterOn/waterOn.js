const { commandsList } = require("../../config/commandsList");

module.exports = {
  command: commandsList.waterOn,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(
      chatId,
      "Вы <i><b>Включили</b></i> 💦 и изменили статус!",
      {
        parse_mode: "HTML",
      }
    );
  }
}