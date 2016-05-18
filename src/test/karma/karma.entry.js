require('es6-shim');
require('reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

var browser = require('@angular/platform-browser-dynamic/testing');
var coreTesting = require('@angular/core/testing');
var context = require.context('../specs/', true, /\.spec\.ts$/);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

coreTesting.setBaseTestProviders(
    browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

context.keys()
    .forEach(context);