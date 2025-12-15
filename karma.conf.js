module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        browsers: ['ChromeHeadless'],
        reporters: ['progress', 'coverage'],
        coverageReporter: {
        dir: require('path').join(__dirname, './coverage'),
        subdir: '.',
        reporters: [
            { type: 'html' },
            { type: 'lcov' },
            { type: 'text-summary' }
        ],
        check: {
            global: {
                statements: 80,
                branches: 80,
                functions: 80,
                lines: 80
            }
        }
        },
        restartOnFileChange: true
    });
};