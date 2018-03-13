'use strict';

var extensionSettings = turbine.getExtensionSettings();
var loadScript = require('@adobe/reactor-load-script');

module.exports = function(extensionSettings) {
  var url = 'https://use.typekit.net/' + extensionSettings.typekitID + '.js';

  loadScript(url).then(function() {
    // Do something ...
    console.log('the url is: ' + url);
    Typekit.load();
    turbine.logger.info('Typekit loaded successfully');
  }).catch(function() {
    turbine.logger.error('Typekit failed to load');
  });
};
