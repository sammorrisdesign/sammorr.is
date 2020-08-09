var fs = require('fs-extra');
var assets = require('../scripts/assets.js');

var config = {};
config.specs =  {
    'deploy': process.argv.slice(2)[0] == 'true' ? true : false,
    'modified': process.argv.slice(2)[1] ? process.argv.slice(2)[2] : 'none'
};
config.path = '.build/';
config.absolutePath = config.specs.deploy === false ? 'http://localhost:8500' :'https://sammorr.is';
config.data = require('../data.json');
config.data.otherProjects.sort(function(a, b) { return b.year-a.year; });

config.data.path = config.absolutePath

assets.compile(config);
