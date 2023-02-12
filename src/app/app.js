require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const BotOptions = require("../config/botOptions");
const { commandsDescription } = require("../config/commandsList");
const commandToRegex = require("../utils/utils");
const commands = require("../commands/commands");

const TOKEN = process.env.TELEGRAM_TOKEN || "5529389626:AAHkl8hj92oCOuHTwNCpa6f880bdqa02QOA";

//Create Singleton class
class App {
  //Initialize Telegram Bot API
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
  }

  loadCommands = async () => {
    commands.forEach((command) => {
      this.bot.onText(commandToRegex(command.command), async (msg) => {
        command.handler(msg, this.bot);
      });
    });
    //Check if command not found
    this.bot.on("message", async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
      let commandFound = false;
      commands.forEach((command) => {
        if (commandToRegex(command.command).test(text)) {
          commandFound = true;
        }
      })
      if (!commandFound) {
        await this.bot.sendMessage(
          chatId,
          `Команда <b>${msg.text}</b> не найдена!`,
          {
            parse_mode: "HTML"
          }
        );
      }
    });
  }
}

module.exports = App;