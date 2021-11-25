module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'function-declaration',
            },
        ],
        'import/no-unresolved': [
            2,
            { caseSensitive: false },
        ],
        'react/prop-types': 0,
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
    },
};
