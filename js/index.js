var parser = require('./lib/parser');
var regexes = require('./regexes.json');

module.exports = parser(regexes);
