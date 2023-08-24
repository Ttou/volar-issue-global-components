const { resolve } = require('path')

const vueCompositionAPI = resolve(
  './node_modules/@vue/composition-api/dist/vue-composition-api.mjs'
)

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 禁用运行时 ts 类型检查
    config.plugins.delete('fork-ts-checker')
    // 禁用 Prettier
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.prettify = false
        return options
      })

    // 修复路径
    config.resolve.alias.set(
      '@vue/composition-api/dist/vue-composition-api.mjs',
      vueCompositionAPI
    )
  },
  configureWebpack: config => {
    config.devtool = 'source-map'
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    })
  }
}
