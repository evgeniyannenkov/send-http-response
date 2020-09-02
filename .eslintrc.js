module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        commonjs: true
    },
    globals: {
        window: true,
        self: true,
        fetch: true,
        Blob: true,
        __DEV__: true
    },
    extends: ['standard', 'prettier', 'prettier/standard', 'prettier/vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    plugins: ['prettier', 'standard', 'vue'],
    rules: {
        'prettier/prettier': 'error',
        semi: [2, 'always']
    }
};
