require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const BotOptions = require("../config/botOptions");
const { commandsDescription } = require("../config/commandsList");
const commandToRegex = require("../utils/utils");
const commands = require("../commands/commands");

const TOKEN = process.env.TELEGRAM_TOKEN;

class App {
  constructor() {
    if (!App.instance) {
      this.bot = new TelegramApi(TOKEN, BotOptions);
      App.instance = this;
      this.init();
    }
    return App.instance;
  }

  init = async () => {
    this.bot.setMyCommands(commandsDescription);
    await this.loadCommands();
    await this.loadCallbacks();
  };

  loadCommands = async () => {
    commands.forEach((command) => {
      this.bot.onText(commandToRegex(command.command), async (msg) => {
        command.handler(msg, this.bot);
      });
    });
    this.bot.on("message", async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
      let commandFound = false;
      commands.forEach((command) => {
        if (commandToRegex(command.command).test(text)) {
          commandFound = true;
        }
      });
      if (!commandFound) {
        await this.bot.sendMessage(
          chatId,
          `Команда <b>${msg.text}</b> не найдена!`,
          {
            parse_mode: "HTML",
          }
        );
      }
    });
  };

  loadCallbacks = async () => {
    this.bot.on("callback_query", async (query) => {
      const chatId = query.message.chat.id;
      const data = query.data;

      if (data === "nowateroff") {
        const from = query.from || {};
        const username = from.username ? `@${from.username}` : "";
        const firstName = from.first_name ? from.first_name : "";
        const lastName = from.last_name ? from.last_name : "";
        const fullName =
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName;
        await this.bot.sendMessage(
          chatId,
          `${fullName} ${
            username ? `(${username}) ` : ""
          }попросил(а) <i><b>не выключать</b></i> 💦`,
          {
            parse_mode: "HTML",
          }
        );
        await this.bot.answerCallbackQuery(query.id, {
          text: `Выполнено`,
        });
      }
    });
  };
}

module.exports = App;
