// @ts-check
import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import globals from 'globals';


export default tslint.config(
    {
        ignores: [
            'coverage/**/*',
            'dist/**/*',
            'docs-dist/**/*',
            'node_modules/**/*'
        ],
    },
    eslint.configs.recommended,
    ...tslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'no-control-regex': 'off',
            'no-empty': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
        },
    }
);
