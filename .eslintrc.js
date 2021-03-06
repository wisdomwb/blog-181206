module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/html-quotes': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-parsing-error': 'off'
  }
}