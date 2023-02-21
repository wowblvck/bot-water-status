const { commandsList } = require("../../config/commandsList");
const moment = require("moment-timezone");
const store = require("../../components/store"); 

module.exports = {
  command: commandsList.waterOff,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    const from = msg.from || {};
    const username = from.username ? `@${from.username}` : "";
    const firstName = from.first_name ? from.first_name : "";
    const lastName = from.last_name ? from.last_name : "";
    const time = moment(msg.date * 1000).tz("Europe/Moscow").locale("ru").format('LT (LL)');
    const fullName = firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName;
    await bot.sendMessage(
      chatId,
      `${fullName} ${username ? `(${username}) ` : ""}<i><b>включил(а)</b></i> 💦 в ${time}`,
      {
        parse_mode: "HTML",
      }
    );
    store.History = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      status: false,
      time: time
    };
  }
}