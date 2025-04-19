/* 配置路由  引入vue */
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用路由插件
Vue.use(VueRouter);
//引入配置路由的组件
import Home from '@/pages/Home';
import TypeNavContent from '@/pages/Home/TypeNav/TypeNavContent';
import Embarrassing from '@/pages/Embarrassing';
import Weather from "@/pages/weather";
import Shortmessage from '@/pages/Shortmessage'
import Message from '@/pages/Message';
import Channel from '@/pages/Channel';
import ChannelList from '@/pages/ChannelList';
import ListDetail from "@/pages/ChannelList/ListDetail";

//暴露路由实例
export default new VueRouter({
    /* dist打包后路径引用 */
    publicPath: './',
    //配置路由
    routes: [
        //重定向 启动目录时候 直接定向到首页home
        {
            path: '*',
            redirect: 'home'
        },
        {
            //配置路由注册路径
            path: '/home',
            //组件名Home
            component: Home,
            //定义路由名可以在push参数时候用名字push
            name: 'home',
            meta: {
                //  activeMenu: '/channel'
            }
        },

        //新闻详情页
        {
            path: '/typenavcontent/:id',
            //组件名
            component: TypeNavContent,
            //定义路由名可以在push参数时候用名字push
            name: 'typenavcontent',
        },


        /* 囧话路由 */
        {
            path: '/embarrassing',
            component: Embarrassing,
            //定义路由名可以在push参数时候用名字push
            name: 'embarrassing',
            meta: {
                keepAlive: false, // 此组件不需要被缓存
            }
        },

        /* 天气 */
        {
            path: '/weather',
            component: Weather,
            name: 'weather', //路由名
            meta: {
                keepAlive: false, //此组件不需要缓存                
            }
        },

        /* 短讯 */
        {
            path: '/shortmessage',
            //组件名
            component: Shortmessage,
            name: 'shortmessage', //路由名
            meta: {
                //requiresAuth: true, //如果设置为false 连路由跳转记录都会被清空 不会返回上一级目录

            }
        },
        /*  {
             path: '/shormessage',
             component: Shormessage,
             name: 'shormessage', //路由名
         }, */

        /* 短讯详情页 */
        {
            //注册路由路径
            path: '/message',
            //组件名
            component: Message,
            name: 'message', //路由名



        },

        /* 频道页面 */
        {
            path: '/channel',
            component: Channel,
            name: 'channel', //路由名
            meta: {
                keepAlive: true
            }
        },

        /* 点击频道跳转到列表 */
        {
            //注册路由路径
            path: '/channellist',
            //组件名
            component: ChannelList,
            //路由名
            name: 'channellist',
        },

        /* 频道跳转列表的详情页 */
        {
            //注册路由路径  skid这个随便命名 占位用来传params参数
            path: '/listdetail/:index',
            //组件名
            component: ListDetail,
            //路由名
            name: 'listdetail',

        }
    ]
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}