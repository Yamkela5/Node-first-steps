const chalk = require('chalk');
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Kwanele'));
console.log(styledMessage)
