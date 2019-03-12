'use strict';

var kitId = turbine.getExtensionSettings().typekitID;
var loadScript = require('@adobe/reactor-load-script');

module.exports = function() {
  var url = 'https://use.typekit.net/' + kitId + '.js';

  loadScript(url).then(function() {
    Typekit.load();
    turbine.logger.info('Web project fonts loaded successfully');
  }).catch(function() {
    turbine.logger.error('Web project fonts failed to load');
  });
};
