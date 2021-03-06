// Call /Applications/phantomjs screencapture.js

var page = require('webpage').create();
page.viewportSize = {
  width: 1280*2,
  height: 1000*2
};
page.zoomFactor = 2;

page.open('http://localhost:8080/index.html', function() {
  var filename = (new Date()).toISOString().substring(0,16).replace(/:/g, '-');
  window.setTimeout(function () {
    page.render(filename + '.png');
    phantom.exit();
  }, 15000);
});
