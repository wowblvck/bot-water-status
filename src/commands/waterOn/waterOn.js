const { commandsList } = require("../../config/commandsList");
const moment = require("moment-timezone");
const store = require("../../components/store");

module.exports = {
  command: commandsList.waterOn,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    const username = msg.from.username;
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    const time = moment(msg.date * 1000).tz("Europe/Moscow").locale("ru").format('LT (LL)');
    await bot.sendMessage(
      chatId,
       `${firstName} ${lastName} (@${username}) <i><b>включил(а)</b></i> 💦 в ${time}`,
      {
        parse_mode: "HTML",
      }
    );
    store.History = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      status: true,
      time: time
    };
  }
}