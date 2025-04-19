//引入api目录下封装好的接口请求函数
import { reqNewsList, } from "@/api";

//注册home模块仓库 仓库名叫state
const state = {
    //存储新闻列表的数据
    newsList: {},
    chid: '',



};
//mutations 修改state的唯一手段
const mutations = {
    //新闻菜单数据存储到仓库newsList: []
    GETNEWSLIST(state, newsList) {

        state.newsList = newsList.showapi_res_body.pagebean.contentlist.filter(function(item) {

            return item.img
        }).slice(0, 8);
        //console.log(state.newsList);
    },

};




//这里只是先定义action 真正调用action需要去到需要渲染新闻数据的页面进行触发action请求这里的action才会启动
//actions 处理action 书写自己的业务逻辑  也是处理异步请求
const actions = {
    //定义一个函数来调用新闻请求接口的函数 
    async getNewsList({ commit }) {
        //使用新闻请求接口函数然后赋值给result
        let result = await reqNewsList();
        //console.log(result);
        if (result != 0) {
            //如果请求成功 通过commit提交给muation进行数据赋值
            //
            commit("GETNEWSLIST", result);
            //  console.log(result);
        }
    },

};

//getters 理解为计算属性 用于简化仓库数据 让组件获取仓库的数据更方便
const getters = {};

//配置完后要对外暴露  然后还要去home大仓库index下注册这个仓库
export default {
    state,
    mutations,
    actions,
    getters
}