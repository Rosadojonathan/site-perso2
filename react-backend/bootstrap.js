require('ignore-styles');
require("@babel/polyfill");


require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node',
        '@babel/proposal-class-properties'
        ]
});

require('./app');