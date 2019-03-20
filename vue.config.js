const path = require('path')

function resolve(pathname) {
    return path.resolve(__dirname, pathname)
  }
  

module.exports = {
    configureWebpack: config=>{
        config.resolve.alias={
            ...config.resolve.alias,
            assets:resolve('./src/assets'),
            utils:resolve('./src/utils'),
            components:resolve('./src/components'),
            views:resolve('./src/views')
        }
    },

    devServer: {
        proxy: {
            '/api':{
                target: 'https://las.secoo.com',
                changeOrigin: true
            }
        }
    }
}