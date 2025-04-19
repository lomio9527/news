const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    /* NEWS是仓库名，也是根目录文件夹。 giteepages会根据填写的目录，去找到该目录下面的index.html进行渲染*/
    publicPath: process.env.NODE_ENV === 'production' ?
        '/NEWS/' : '/',
    devServer: {

    },




})