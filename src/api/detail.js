import requests from './request'

//请首页新闻详情页内容 封装函数
//import { create } from "@/api/detail"
export function getDetail() {
    return requests({
        /*  url: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html', */
        url: 'http://ali-news.showapi.com/newsList/',
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
            id: '',
        },

    })
}