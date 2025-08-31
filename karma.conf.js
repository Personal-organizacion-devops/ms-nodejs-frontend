module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.ts'
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['typescript']
    },
    reporters: ['progress'],
    browserNoActivityTimeout: 60000
  });
};
