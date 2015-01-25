// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

var conf = require('./karma.conf.js');

conf.coverageReporter= {
    type : 'cobertura',
    dir : 'report/ci/'
  };

module.exports = conf;
