// http://eslint.org/docs/user-guide/configuring

module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    // commonjs: true,
    // es6: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // eslint:recommended, airbnb, standard
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    window: false
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    // 不允许有声明后未使用的变量或者参数
    'no-unused-vars': 1,
    // 函数定义时括号前的空格
    'space-before-function-paren': [0, {
      'anonymous': 'always',
      'named': 'never'
    }],
    // 是否允许对象中出现结尾逗号
    'comma-dangle': ['off', 'never'],
    'eol-last': 0,
    'eqeqeq': 0,
    // 禁止在 return 语句里赋值
    'no-return-assign': [
      'warn',
      'always'
    ],
    'no-extend-native': 1,
    // @fixable 结尾必须有分号
    'semi': [
      'off',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 0,
    // @fixable 申明后不再被修改的变量必须使用 const 来申明
    'prefer-const': 1,
    // 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
    'no-mixed-operators': 'off',
    // 禁止变量名与上层作用域内的定义过的变量重复
    'no-shadow': [
      1,
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [
          'resolve',
          'reject',
          'done',
          'cb',
          'callback',
          'error',
          'err',
          'e'
        ]
      }
    ],
    // @fixable 必须使用模版字面量而不是字符串连接
    'prefer-template': 'off',
    // 禁止使用 ++ 或 --
    'no-plusplus': 'off',
    // @fixable 必须使用 a = {b} 而不是 a = {b: b}
    'object-shorthand': 'off',
    // 禁止变量名出现下划线
    'no-underscore-dangle': 'off',
    // parseInt 必须传入第二个参数
    'radix': 0,
    // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    'no-nested-ternary': 'off',
    // 禁止函数在不同分支返回不同类型的值
    'consistent-return': 'off',
    // 限制一行的长度
    'max-len': 'off',
    // 禁止使用特定的语法 for in loop
    'no-restricted-syntax': 'off',

    // don't require .vue extension when importing
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-unresolved': [0, {
      commonjs: true,
      amd: true
    }],
    'import/first': 0,
    'import/newline-after-import': 0,
  }
}