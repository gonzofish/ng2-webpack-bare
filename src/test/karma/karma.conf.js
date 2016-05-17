// Karma configuration
// Generated on Tue Apr 05 2016 16:31:20 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS2'],
    files: [
      '../../../node_modules/es6-shim/es6-shim.min.js',
      'karma.entry.js'
    ],
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    phantomJsLauncher: {
        exitOnResourceError: true
    },
    port: 9876,
    preprocessors: {
        'karma.entry.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    singleRun: false,
    webpack: require('../../../webpack/webpack.test.js'),
    webpackServer: {
        noInfo: true
    }
  });
}
