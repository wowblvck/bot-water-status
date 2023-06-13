const { commandsList } = require("../../config/commandsList");
const store = require("../../components/store");

module.exports = {
  command: commandsList.waterStatus,
  handler: async (msg, bot) => {
    const chatId = msg.chat.id;
    let history = "";
    let historyOne = "";
    let lastOne = {};
    let lastFive = [];
    if (store.History.length) {
      lastOne = store.History[store.History.length - 1];
      lastFive = store.History.slice(-5);
      lastFive.forEach((el, i) => {
        const { firstName, lastName, username } = el;
        const fullName =
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName;
        history += `${i + 1}. ${fullName} ${username ? `(${username}) ` : ""}${
          el.status === true ? "включал(а)" : "выключал(а)"
        } 💦 в ${el.time}\n`;
      });
      if (lastOne.status) {
        historyOne = "Сейчас вода - <b>включена</b>";
      } else {
        historyOne = "Сейчас вода - <b>выключена</b>";
      }
    } else {
      history = "История изменения статуса воды <b>отсутствует</b>";
    }

    await bot.sendMessage(
      chatId,
      `
      ${
        historyOne.length ? historyOne : ""
      }\n\n<b>История (5) последних изменений статуса воды:</b>\n\n${history}`,
      {
        parse_mode: "HTML",
      }
    );
  },
};
