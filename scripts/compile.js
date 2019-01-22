var fs = require('fs-extra');
var assets = require('../scripts/assets.js');

var config = {};
config.specs =  {
    'deploy': process.argv.slice(2)[0] == 'true' ? true : false,
    'modified': process.argv.slice(2)[1] ? process.argv.slice(2)[2] : 'none'
};
config.path = '.build/';
config.absolutePath = config.specs.deploy === false ? 'http://localhost:8000' :'http://sammorr.is';
config.data = require('../data.json');
config.data.path = config.absolutePath

console.log(config.data);

assets.compile(config);
