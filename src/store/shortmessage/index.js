//引入api目录下封装好的接口请求函数  二次封装时候记得要写绝对路径
import { reqShortmessage } from "@/api/shortmessage.js";

//注册Shortmessage模块仓库 仓库命叫state
const state = {
    //存储囧话数据
    Shortmessage: [],

};

//mutations 修改state的唯一手段
const mutations = {
    //囧话数据存储到 Embarrassing:[], 仓库
    GETSHORTMESSAGE(state, Shortmessage) {

        state.Shortmessage = Shortmessage.showapi_res_body.pagebean.contentlist.filter(function(item) { return (item.img) })
            //console.log(state.Shortmessage);
            //.filter(function(item) { return (item.img) });
    },



};


//这里只是先定义action 真正调用action需要去到需要渲染囧话数据的页面进行触发action请求这里的action才会启动
//actions 处理action 书写自己的业务逻辑 也是处理异步请求
const actions = {
    //定义一个函数调用请求接口请求囧话数据
    async getShortmessage({ commit }) {
        //使用囧话请求接口函数然后赋值给result
        let result = await reqShortmessage();
        //console.log(result);
        //如果请求成功 通过commit提交给muation进行数据赋值
        if (result) {
            //let result = resdata.filter(function(item) { return (item.img) })
            commit("GETSHORTMESSAGE", result);

            // console.log(result);
        };

    },

};


//getters 理解为计算属性 用于简化仓库数据 让组件获取仓库的数据更方便
const getters = {};



export default {
    state,
    mutations,
    actions,
    getters
}