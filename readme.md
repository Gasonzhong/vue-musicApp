# Vue.js搭建移动端音乐播放器
* 安装vue脚手架 _npm install vue-cli_
* 初始化项目 _vue init webpack vue-music_
## src包目录
### api（jsonp或者ajax接口）
### base 工具包
### comm 公共包
* fonts
* image
* js
* stylus 样式
### components
### router
### store
## webpack下配置别名
``` resolve: {
 extensions: ['.js', '.vue', '.json'],
    alias: { //配置目录别名，直接用src下中的目录
        '@': resolve('src'),
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'base': resolve('src/base'),
        'api': resolve('src/api')
    }
  },```

## webpack中使用代理请求
* 注意看webpack中文档，看清楚Req和Rep
```   
 proxy: {
      '/api': {
        target: 'https://c.y.qq.com/',
        pathRewrite: {'^/api/getDiscList': '/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'},
        secure: false,
        changeOrigin: true,
        onProxyReq: function (proxyReq, req, res) {
          proxyReq.setHeader('referer', 'https://c.y.qq.com/')
          proxyReq.setHeader('host', 'c.y.qq.com')
        }
      }
    }
```
