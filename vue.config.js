const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  chainWebpack: config => {
    // 为src下文件配别名，不使用相对路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('icons', resolve('src/icons'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('style', resolve('src/style'))

    /** 设置处理svg的router，使svg可直接用名称调用，无需路径 */
    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  // outputDir: '../static/', // 打包文件存放地址
  // indexPath: 'zm.html', // 打包名称
  // publicPath: '/static/', // 打包后静态资源引入路径
  devServer: {
    host: '127.0.0.1',
    port: 8080, // 端口号
    disableHostCheck: true,
    open: true, // 配置自动启动浏览器
    hotOnly: true // 热更新
    // proxy: {
    // '/': {
    //   target: 'http://wwenj.com',
    //   changeOrigin: true,
    //   ws: false,
    //   bypass: (req, res) => {
    //     if (req.url === '/') return `/static`
    //     // if (/\.\w+$/.test(req.url)) {
    //     //   console.log('skip static', req.url)
    //     //   return req.url
    //     // }
    //   }
    // }
    // }
  }
}
