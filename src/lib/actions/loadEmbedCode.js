'use strict';

var kitId = turbine.getExtensionSettings().typekitID;
var loadScript = require('@adobe/reactor-load-script');

module.exports = function () {
  var url = 'https://use.typekit.net/' + kitId + '.js';

  loadScript(url).then(function () {
    Typekit.load();
    turbine.logger.info('Kit loaded successfully');
  }).catch(function () {
    turbine.logger.error('Kit failed to load');
  });
};
