var path = require('path');

module.exports = {
    entry: {
        'gop-lotus': './components/gop-lotus/gop-lotus.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [

    ],
    module: {
        rules: [
        ]
    }
};