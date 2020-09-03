const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: {
        validator: './src/lib/validator.js',
        serializer: './src/lib/serializer.js',
        initialValue: './src/lib/initialValue.js'
    },
    output: [
        {
            dir: 'public',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        replace({
            'process.env.BUILD': JSON.stringify('web') // vuelidate lib validators
        }),
        nodeResolve({
            browser: true
        }),
        commonjs()
    ],
    watch: {
        include: 'src/lib/**',
        chokidar: {
            useFsEvents: false
        }
    }
};
