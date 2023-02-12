const { commandsList } = require("../../config/commandsList");
const { start } = require("../../controllers/start");

module.exports = {
  command: commandsList.start,
  handler: async (msg, bot) => {
    start(msg, bot);
  }
}

