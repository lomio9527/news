//当前这个模块：API进行统一管理(带有请求响、响应的拦截器)  
import requests from "./request";


//请求写好之后要存储到仓库之中
//首页新闻列表请求
//自定义一个reqContentList函数进行对外暴露当函数进行调用就发请求
export const reqNewsList = () => {
    //发请求   利用axios封装好的函数requests进行 发送请求  method表明 get请求  然后去mains进行暴露引用
    return requests({
        url: 'http://ali-news.showapi.com/newsList',
        method: 'get',
        headers: {
            'Authorization': 'appcode ce0c0bc919f248c1b984fa2e18149fdf',
        },
        params: {
            title: '',
            page: '1',
            channel: '',
            channelId: '',
            maxResult: '50',
            needHtml: 1,
            needContent: '0',
        },

    })
};