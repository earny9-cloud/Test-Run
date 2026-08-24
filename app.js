const chalk = require("chalk");
const { celsiusToF, fToCelsius } = require("./converter.js");

console.log(chalk.yellow.bold(`41°C = ${celsiusToF(41)}°F`));
console.log(chalk.blue.bold(`20°C = ${celsiusToF(20)}°F`));
console.log(chalk.red.bold(`98.6°F = ${fToCelsius(98.6).toFixed(0)}°C`));