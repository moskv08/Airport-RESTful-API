module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "comma-dangle": 0,
  },
};
