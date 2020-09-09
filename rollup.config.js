const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');
const clear = require('rollup-plugin-clear');
const { version } = require('./src/lib/meta.json');
const generateBuildVersions = require('./src/services/rollupPluginGenerateBuildVersions');

const dist = path.join('dist', version);

module.exports = {
    input: {
        validator: './src/lib/validator.js',
        serializer: './src/lib/serializer.js',
        initialValue: './src/lib/initialValue.js',
        hooks: './src/lib/hooks.js'
    },
    output: [
        {
            dir: dist,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        clear({
            targets: [dist]
        }),
        nodeResolve({
            browser: true
        }),
        commonjs(),
        copy({
            targets: [
                { src: 'src/lib/meta.json', dest: dist },
                { src: 'src/lib/logic.js', dest: dist }
            ]
        }),
        generateBuildVersions()
    ],
    watch: {
        include: 'src/lib/**',
        chokidar: {
            useFsEvents: false
        }
    }
};
