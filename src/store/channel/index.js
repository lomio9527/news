//引入api目录下封装好的接口请求函数  二次封装时候记得要写绝对路径
import { reqChannel, } from "@/api/channel.js";

//注册Shortmessage模块仓库 仓库命叫state
const state = {
    //存储囧话数据
    channelFocus: [],
    /*  channelNews: [],
     channelOhter: [], */

};

//mutations 修改state的唯一手段
const mutations = {
    //囧话数据存储到 Embarrassing:[], 仓库
    GETCHANNEL(state, result) {
        //仓库定义的是数组  这里取值的时候直接取值到result.showapi_res_body.channelList 数组的位置
        //channelList 这个在api位置里面是数组 取值到数组的位置 用slice才不会报错
        JSON.parse(JSON.stringify(state.channelFocus = result.showapi_res_body.channelList));

        //JSON.parse(JSON.stringify(state.channelNews = result.showapi_res_body.channelList));
        //JSON.parse(JSON.stringify(state.channelOhter = result.showapi_res_body.channelList));
        //state.Channel = Channel.showapi_res_body.pagebean.contentlist;
        //console.log(state.channelFocus);

    },




};


//这里只是先定义action 真正调用action需要去到需要渲染囧话数据的页面进行触发action请求这里的action才会启动
//actions 处理action 书写自己的业务逻辑 也是处理异步请求
const actions = {
    //定义一个函数调用请求接口请求囧话数据

    async getChannel({ commit }) {
        //使用囧话请求接口函数然后赋值给result
        let resdata = await reqChannel();
        //console.log(result);
        //如果请求成功 通过commit提交给muation进行数据赋值
        if (resdata) {
            //let result = JSON.parse(JSON.stringify(resdata));
            commit("GETCHANNEL", resdata);
            //console.log(result);
        };

    },





};


//getters 理解为计算属性 用于简化仓库数据 让组件获取仓库的数据更方便
const getters = {
    channelLists(state) {
        return state.channelFocus


    },


};



export default {
    state,
    mutations,
    actions,
    getters
}