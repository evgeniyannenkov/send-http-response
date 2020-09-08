/* eslint-disable */

const path = require('path');
const { version } = require('./src/lib/meta.json');

module.exports = {
    publicPath: './',
    outputDir: path.join('dist', version),
    lintOnSave: false,
    assetsDir: 'static',
    productionSourceMap: false
};
