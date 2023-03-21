const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        Views: path.join(__dirname, 'src/views'),
        Components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
        Mixins: path.join(__dirname, 'src/mixins'),
        Api: path.join(__dirname, 'src/api'),
        Configs: path.join(__dirname, 'src/configs'),
        Common: path.join(__dirname, 'src/components/common'),
      },
    },
  },
}
