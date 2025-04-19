//引入api目录下封装好的接口请求函数
import { reqWeather } from "@/api/weather.js";

//注册weather仓库模块
const state = {
    Weather: {},
};

//mu
const mutations = {
    //数据赋值给仓库
    GETWEATHER(state, results) {
        //将数据进行转换  去掉{__ob__: observer}
        //let Weather = JSON.parse(JSON.stringify(state.Weather = result));
        //console.log(Weather, "输出");
        state.Weather = results.result;
        //console.log(state.Weather);
    }
};

//action 定义组件请求函数
const actions = {
    async getWeather({ commit }, params = {}) {
        //使用weather函数请求接口赋值给result
        let resdata = await reqWeather(params);
        //commit提交
        if (resdata) {
            //异步引起的原因 将返回的数据data先转换为JSON字符换形式，然后再从字符串形式转换成JSON格式
            let results = JSON.parse(JSON.stringify(resdata));
            //console.log(result);
            commit("GETWEATHER", results);
            // console.log(result);
        }
    }
};

//简化仓库数据  把一个个对象里面的数组提取出来
const getters = {
    /* 这里的state 就是 当前这个小仓库的Weather  不是大仓库下的 weather仓库*/
    daily(state) {
        //console.log(state);
        //直接拿到数组 在getter下
        return state.Weather.daily

    }
};

export default {
    state,
    mutations,
    actions,
    getters
}