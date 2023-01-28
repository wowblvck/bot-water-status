require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const BotOptions = require("./config/botOptions");
const CommandList = require("./config/commands");
const commandToRegex = require("./utils/utils");

const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(TOKEN, BotOptions);

const start = () => {
  bot.setMyCommands([
    { command: `${CommandList.start}`, description: "Начальное приветствие" },
    { command: `${CommandList.waterOn}`, description: "Изменить статус воды на 'Включено'" },
    { command: `${CommandList.waterOff}`, description: "Изменить статус воды на 'Выключено'" },
    { command: `${CommandList.waterStatus}`, description: "Узнать статус воды" },
  ]);

  bot.onText(commandToRegex(CommandList.start), async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendSticker(
      chatId,
      "https://tlgrm.ru/_/stickers/a03/378/a03378c3-122f-314c-9f3f-c03ec9f00561/1.jpg",
    )
    await bot.sendMessage(
      chatId, 
      "Добро пожаловать 🫡. Здесь ты можешь узнать статус воды 💦 в своем жилище или установить статус текущего состояния.\n\nВот список команд:"
    );
  });

  bot.onText(commandToRegex(CommandList.waterOn), async(msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(
      chatId,
      "Вы <i><b>Включили</b></i> 💦 и изменили статус!",
      {
        parse_mode: "HTML",
      }
    );
  })
  
  //Check command is undefined
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (!Object.values(CommandList).includes(text)) {
      await bot.sendMessage(
        chatId,
        `Команда <b>${msg.text}</b> не найдена!`,
        {
          parse_mode: "HTML"
        }
      );
    }
  });
}

start();
