var path = require('path'), 
    fs = require('fs'),
    yaml = require('yamlparser');

var file = path.join(__dirname, '..', 'regexes.yaml'),
    outFile = path.join(__dirname, 'regexes.json'),
    regexes = fs.readFileSync(file, 'utf8');

regexes = yaml.eval(regexes);
fs.writeFileSync(outFile, JSON.stringify(regexes, null, '  '));
