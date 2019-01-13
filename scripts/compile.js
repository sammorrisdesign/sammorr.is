var fs = require('fs-extra');
var assets = require('../scripts/assets.js');

var config = {};
config.specs =  {
    'deploy': process.argv.slice(2)[0] == 'true' ? true : false,
    'modified': process.argv.slice(2)[1] ? process.argv.slice(2)[2] : 'none'
};
config.path = '.build/';
config.version = 'v/' + Date.now();
config.absolutePath = config.specs.deploy === false ? 'http://localhost:8000' : config.remote.url + '/' + config.remote.path + '/' + config.version;

assets.compile(config);
