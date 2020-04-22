var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './js/main.js',
    mode: "development",
    output: {
        path: __dirname + '/dist/js'
    },
    watch: true,
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['./dist/*.html', './dist/css/*.css'],
            server: { baseDir: ['dist'] }
        })
    ]
};