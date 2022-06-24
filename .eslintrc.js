module.exports = {
    env: {
        browser: true,
        es2021: true,
        'react-native/react-native': true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-native', '@typescript-eslint'],
    rules: {
        'import/prefer-default-export': 0,
        'react/style-prop-object': 0,
        'no-use-before-define': 0,
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-underscore-dangle': 'off',
        indent: 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    // Solves import issues
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            },
        },
        react: { version: 'detect' },
    },
};
