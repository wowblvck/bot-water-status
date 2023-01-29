require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const BotOptions = require("../config/botOptions");
const { commandsDescription } = require("../config/commandsList");
const commandToRegex = require("../utils/utils");
const commands = require("../commands/commands");

const TOKEN = process.env.TELEGRAM_TOKEN || "5529389626:AAEYP0tADLz2BPEhhcSIyXE1Iu72nw4U7to";

//Create Singleton class
class App {
  //Initialize Telegram Bot API
  constructor() {
    if (!App.instance) {
      this.bot = new TelegramApi(TOKEN, BotOptions);
      this.init();
      App.instance = this;
    }
    return App.instance;
  }

  init = () => {
    this.bot.setMyCommands(commandsDescription);
    this.loadCommands();
  }

  loadCommands = () => {
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