const { commandsList } = require("../../config/commandsList");
const moment = require("moment-timezone");
const store = require("../../components/store");

module.exports = {
  command: commandsList.waterOn,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    if (store.Status) {
      return await bot.sendMessage(chatId, `💦 включалась в ${store.LastTime}`);
    }
    const from = msg.from || {};
    const username = from.username ? `@${from.username}` : "";
    const firstName = from.first_name ? from.first_name : "";
    const lastName = from.last_name ? from.last_name : "";
    const time = moment(msg.date * 1000)
      .tz("Europe/Moscow")
      .locale("ru")
      .format("LT (LL)");
    const fullName =
      firstName && lastName
        ? `${firstName} ${lastName}`
        : firstName || lastName;
    await bot.sendMessage(
      chatId,
      `${fullName} ${
        username ? `(${username}) ` : ""
      }<i><b>включил(а)</b></i> 💦 в ${time}`,
      {
        parse_mode: "HTML",
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{ text: "Не выключай!", callback_data: "nowateroff" }],
          ],
        }),
      }
    );
    store.History = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      status: true,
      time: time,
    };
    store.Status = true;
    store.LastTime = time;
  },
};
