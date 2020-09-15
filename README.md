## vue项目基本配置

### 创建方式

vue create demo

### css预处理器 

scss

### ui组件

vant-ui 

安装 npm install  vant  -s

### 请求方式axios

npm install axios -s

表单上传
npm install qs -s  

### 跨域配置

项目根目录下创建 `vue.config.js`

```
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    publicPath: "./",
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: false,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                // target: ''
                target: 'you url', //对应自己的接口
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
}
```



### 适配方式rem

npm install lib-flexible --save

npm install postcss-px2rem-exclude --save

在项目入口文件main.js中添加如下代码，引入flexible

`import 'lib-flexible'`

在根目录下的 `vue.config.js`添加代码

```
css: {
        extract: IS_PROD,
        loaderOptions: {
            postcss: {
                // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
                plugins: [
                    require("postcss-px2rem-exclude")({
                        remUnit: 75,
                        exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件，防止第三方的ui使用了rem导致过小
                    })
                ]
            }
        }
    },
```

