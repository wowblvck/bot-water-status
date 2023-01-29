const commandsList = {
  //Command for start Telegram bot
  start: "/start",
  //Command for turn on water
  waterOn: "/wateron",
  //Command for turn off water
  waterOff: "/wateroff",
  //Command for check water status
  waterStatus: "/waterstat",
}

const commandsMarkup = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: "Включить воду", callback_data: "wateron"}],
      [{text: "Выключить воду", callback_data: "wateroff"}],
      [{text: "Узнать статус воды", callback_data: "waterstat"}],
    ]
  })
}

const commandsDescription = [
  { command: `${commandsList.start}`, description: "Начальное приветствие" },
  { command: `${commandsList.waterOn}`, description: "Изменить статус воды на 'Включено'" },
  { command: `${commandsList.waterOff}`, description: "Изменить статус воды на 'Выключено'" },
  { command: `${commandsList.waterStatus}`, description: "Узнать статус воды" },
]

module.exports = { commandsList, commandsMarkup, commandsDescription };