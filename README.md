<h1 align="center">Bot Water Status</h1>

> EN: A simple telegram bot that allows you to monitor and manage (manually) the state of the water heater in the house. Notifies members of current status and allows tracking of management history. It was used as an assistant in the house, where it is necessary to manually control the state of the water heater.

> RU: Простой телеграм бот, который позволяет следить и управлять (вручную) за состоянием водонагревателя в доме. Уведомляет участников о текущем статусе и позволяет отслеживать историю управления. Использовался в качестве помощника в доме, где необходимо вручную контролировать состояние водонагревателя.

---
<h2 align="center">Basic commands</h2>

|Command|Description|
|-----|------|
|/start|Initial welcome screen|
|/wateron|Notify that the water heater is on|
|/wateroff|Notify that the water heater is off|
|/waterstat|View the status of the water heater (on or off), as well as the history of switching|

### Run

Need `Node >= 18`

Install dependencies: `npm install` 

To start in develop mode: `npm run dev`

To start in production mode: `npm run start`

### Environment variables

Create `.env` file and paste Telegram Bot Token (see example.env)

`TELEGRAM_TOKEN="PASTE YOUR BOT TOKEN HERE"`