// const pkg = require('./package')
const env = require("./env");

module.exports = {
  mode: 'universal',
  watchQuery: true,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "zh-cn"
    },
    title: "百检网-专业的第三方检验检测电商平台",
    meta: [
      { charset:'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: 'description',
        name: 'description',
        content:
          '百检网是一家B2B检测电商服务平台，专注于为第三方检测机构以及中小微企业和个人用户搭建互联网+检测电商服务平台。平台汇集了国内外权威检测机构（CNAS/CMA），为广大用户提供一站式检测服务。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '检验检测，检测机构，检测中心，检测单位，检测平台，检测报告,测试报告，质检报告，第三方检测,第三放检测机构，百检网，百检集团，百检平台，百检检测'
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [{
    src: '~assets/styles/normalize.scss',
    lang: 'scss'
  }, '~assets/styles/vant.css','~/assets/iconfont/iconfont.css','vant/lib/index.less'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-vant',
    '~/plugins/axios',
    {
      src: '~/plugins/echarts',
      ssr: false
    }
  ],
// 自动注入组件
components: true,
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  // 所有页面添加鉴权
  router: {
    base: "/",//此为根目录，如果有具体目录需求按实际情况写
    // middleware: ['midd']
  },
  /*
   ** Axios module configuration
   */

   env: {
    BASE_URL: env[process.env.MODE].BASE_URL,
    PC_URL: env[process.env.MODE].PC_URL
  },
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   prefix: '/root',
  //   proxy: true,
  //   progress: false
  // },
  // proxy: {
  //   "/root": {
  //     target: defaultConfig.PROXY_PATH,
  //     changeOrigin: true,
  //     secure: false,
  //     pathRewrite: {
  //       "^/root": ""
  //     }
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: [
      require('autoprefixer')({
        browsers: ['Android >= 4.0', 'iOS >= 7']
      }),
      require('postcss-pxtorem')({
        rootValue: 16,
        propList: ['*']
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter'),
            // 不符合Eslint规则时只警告(默认运行出错)
            // emitWarning: !config.dev.showEslintErrorsInOverlay
          }
        })
      }
      if (!ctx.isDev && ctx.isClient) {
        const CompressionWebpackPlugin = require('compression-webpack-plugin')
        config.plugins.push(
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
              '\\.(' + ['js', 'css'].join('|') +
              ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
          })
        )
        const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
        config.plugins.push(new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          },
          sourceMap: false,
          parallel: true
        }))
        // config.optimization.splitChunks.cacheGroups.echarts = {
        //   name: "chunk-echarts", // 单独将 echarts 拆包
        //   priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
        //   test: /[\\/]node_modules[\\/]echarts|zrender[\\/]/
        // }
      }
    }
  },
  ssr: true
}
