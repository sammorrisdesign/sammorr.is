// dependancies
var watch = require('node-watch');
var cmd = require('node-cmd');

// create server
var bs = require('browser-sync').create();
bs.init({
  server: './.build',
  port: 8500
});

bs.watch('./.build/*.css', function (event, file) {
  if (event === 'change') {
    bs.reload('*.css');
  }
});

// watch src files
watch(['src', 'data.json'], { recursive: true }, function (event, file) {
  var fileExt = file.substring(file.lastIndexOf('.') + 1);
  var isAssets = file.includes('/assets/');

  if (isAssets) {
    console.log('updating static assets');
    cmd.runSync('npm run compile -- local static');
  } else if (fileExt === 'html' || fileExt === 'svg' || fileExt === 'json') {
    console.log('updating html');
    cmd.runSync('npm run compile -- local html');
    bs.reload('*.html');
  } else if (fileExt === 'scss') {
    console.log('updating css');
    cmd.runSync('npm run compile -- local css');
    bs.reload('*.css');
  } else if (fileExt === 'js') {
    console.log('updating js');
    cmd.runSync('npm run compile -- local js');
  } else {
    console.log('non-watchable file extension changed :' + fileExt);
  }
});
