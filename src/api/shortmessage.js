//引入axios函数
import requests from "./request";

//短讯请求
export const reqShortmessage = () => {
    //发送请求
    return requests({

        url: 'http://ali-news.showapi.com/newsList',
        method: 'get',
        headers: {
            'Authorization': 'appcode ce0c0bc919f248c1b984fa2e18149fdf',
        },
        params: {
            title: '',
            channel: '',
            channelId: '',
            maxResult: '68',
            needHtml: 1,
            needContent: '0',
        },
    })
};