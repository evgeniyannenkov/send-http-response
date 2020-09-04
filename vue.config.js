/* eslint-disable */

const _get = require('lodash/get');
const path = require('path');
const bodyParser = require('body-parser');
const packageJson = require('./package.json');
const { version } = require('./src/lib/meta.json');

const css = {
    loaderOptions: {
        sass: {
            prependData: `@import "./src/scss/_mixins.scss";\n@import "./src/scss/colors.scss";\n`
        }
    }
};

module.exports = {
    publicPath: './',
    outputDir: path.join('dist', version),
    lintOnSave: false,
    assetsDir: 'static',
    runtimeCompiler: _get(packageJson, 'projectConfig.runtimeCompiler', false),
    productionSourceMap: false,
    devServer: {
        contentBase: path.join('lib', version),
        index: 'index.html',
        host: 'localhost',
        port: _get(packageJson, 'projectConfig.devServerPort', '9100'),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept'
        },
        after: function(app) {
            app.use(bodyParser.json());
            app.post('/packages', function(req, res) {
                res.status(200).json({
                    success: true,
                    data: { id: req.body.id, versions: [] }
                });
            });
        }
    },
    css: _get(packageJson, 'projectConfig.includeSassMixins', false) ? css : {}
};
