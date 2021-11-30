module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'react/no-did-mount-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/jsx-uses-vars': 2,
        'no-undef': 2,
        'semi': [2, 'always'],
        'react/prop-types': 2,
        'react/jsx-no-duplicate-props': 2,
        'indent': [
            'error',
            4,
        ],
        'quotes': [
            'error',
            'single'
        ],
    }
};
