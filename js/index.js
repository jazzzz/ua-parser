var path = require('path'), 
    fs = require('fs'),
    Results = require('./lib/results').BackwardsCompatResults,
    regexes = require('./regexes.json');

var parseUA = require('./lib/ua').makeParser(regexes.user_agent_parsers);
exports.parseUA = parseUA;

var parseOS = require('./lib/os').makeParser(regexes.os_parsers);
exports.parseOS = parseOS;

var parseDevice = require('./lib/device').makeParser(regexes.device_parsers);
exports.parseDevice = parseDevice;

exports.parse = parse;
function parse(str) {
  var ua = parseUA(str),
      os = parseOS(str),
      device = parseDevice(str);
  return new Results(str, ua, os, device);
}

if (require.main === module) {
  var output, input = process.argv[2];
  if (!input) { process.exit(1); }
  process.stdout.write(parseUA(input).toString());
}
