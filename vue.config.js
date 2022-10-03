const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    proxy: {
            // 配置跨域，请求后端接口
            '/api': {
            target: 'http://localhost:3000',//源地址
            changeOrigin: true,//是否允许跨域
            // ws: false,//是否代理websockets
            
           },
        }
    }

})
