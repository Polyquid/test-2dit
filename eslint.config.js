import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [{ languageOptions: { globals: globals.browser } },
  stylisticJs.configs['all-flat'],
  {
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/js/array-element-newline': ['error', { multiline: true }],
      '@stylistic/js/quote-props': ['error', 'as-needed'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/js/dot-location': ['error', 'property'],
      '@stylistic/js/padded-blocks': ['error', 'never']
    }
  },
  {
    ignores: ['build/']
  }];
