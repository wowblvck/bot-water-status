const App = require("./app/app");

new App();

  
//   //Check command is undefined
//   bot.on("message", async (msg) => {
//     const text = msg.text;
//     const chatId = msg.chat.id;
//     if (!Object.values(CommandList).includes(text)) {
//       await bot.sendMessage(
//         chatId,
//         `Команда <b>${msg.text}</b> не найдена!`,
//         {
//           parse_mode: "HTML"
//         }
//       );
//     }
//   });

//   bot.on("callback_query", (msg) => {
//     console.log(msg);
//   })
// }

