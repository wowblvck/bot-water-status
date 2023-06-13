const startCommand = require("./start/startCommand");
const waterOn = require("./waterOn/waterOn");
const waterOff = require("./waterOff/waterOff");
const waterStat = require("./waterStat/waterStat");

module.exports = [startCommand, waterOn, waterOff, waterStat];
