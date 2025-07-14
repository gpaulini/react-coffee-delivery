import config from '@rocketseat/eslint-config/react.mjs'
import erasableSyntaxOnly from 'eslint-plugin-erasable-syntax-only'

const altConfig = [
  ...config,
  {
    plugins: {
      ...config.plugins,
    },
    rules: {
      ...config.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-tabs': 'off',
      '@stylistic/multiline-ternary': 'off',
      'no-debugger': 'off',
    },
  },
  {
    ...erasableSyntaxOnly.configs.recommended,
  },
]

export default altConfig
