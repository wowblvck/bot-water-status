const { commandsList } = require("../../config/commandsList");

module.exports = {
  command: commandsList.waterOff,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(
      chatId,
      "Вы <i><b>Выключили</b></i> 💦 и изменили статус!",
      {
        parse_mode: "HTML",
      }
    );
  }
}