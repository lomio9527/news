//引入vue 才能使用 vuex
import Vue from 'vue';
import Vuex from 'vuex';

//需要使用一次插件
Vue.use(Vuex)

//引入小仓库在大仓库这里进行注册  小仓库都需要来大仓库注册
import home from "./home";
//注册embarrassing仓库
import embarrassing from './embarrassing'
//注册weather仓库
import weather from './weather'
//组件shortmessage仓库
import shortmessage from './shortmessage'
import channel from './channel'

//这里进行分别暴露 暴露之后 要去main入口文件进行引入注册 让miain文件在页面加载的时候就需要开始的时候就运行一次
export default new Vuex.Store({
    //实现Vuex仓库模块式开发进行数据存储
    modules: {
        home,
        embarrassing,
        weather,
        shortmessage,
        channel,

    }
})