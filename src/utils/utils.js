const commandToRegex = (command) => {
  return new RegExp(`^${command}`);
};

module.exports = commandToRegex;
