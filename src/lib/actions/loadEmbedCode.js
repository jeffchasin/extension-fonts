'use strict';

var extensionSettings = turbine.getExtensionSettings();
var loadScript = require('@adobe/reactor-load-script');

module.exports = function() {
  var url = 'https://use.typekit.net/' + extensionSettings.typekitID + '.js';

  loadScript(url).then(function() {
    Typekit.load();
    turbine.logger.info('Typekit loaded successfully');
  }).catch(function() {
    turbine.logger.error('Typekit failed to load');
  });
};
