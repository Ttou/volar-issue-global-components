const { defineBabelConfig } = require('@ttou/define-config')

module.exports = defineBabelConfig({
  presets: [
    [
      '@vue/app',
      {
        modules: 'commonjs',
        useBuiltIns: 'usage'
      }
    ]
  ]
})
