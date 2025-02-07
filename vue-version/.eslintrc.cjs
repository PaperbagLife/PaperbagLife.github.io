/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "rules": { 
    // ..other rules, 
    "sort-imports": 
    [
      "error", 
      { 
        "ignoreCase": true, 
        "ignoreDeclarationSort": true 
      }
    ], 
 },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
