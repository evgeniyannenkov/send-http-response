const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');
const meta = require('./src/lib/meta.json');

const dist =
    process.env.BUILD === 'production'
        ? path.join('dist', meta.version)
        : path.join('lib', meta.version);

module.exports = {
    input: {
        validator: './src/lib/validator.js',
        serializer: './src/lib/serializer.js',
        initialValue: './src/lib/initialValue.js'
    },
    output: [
        {
            dir: dist,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        nodeResolve({
            browser: true
        }),
        commonjs(),
        process.env.BUILD === 'development' &&
            copy({
                targets: [
                    { src: 'src/lib/meta.json', dest: dist },
                    { src: 'src/lib/logic.js', dest: dist },
                    { src: 'public/**', dest: dist }
                ]
            })
    ],
    watch: {
        include: 'src/lib/**',
        chokidar: {
            useFsEvents: false
        }
    }
};
