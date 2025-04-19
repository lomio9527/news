//对于axios二次封装 
//先引入 axios
import axios from 'axios';

//引入nprogress进度条插件  start进度条参数开始的意思  done参数是结束
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";

//利用axios对象方法create 去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发请求时路径当中会出现api
    /* baseURL: "/nc", */
    timeout: 5000,
});
//请求拦截器  在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //进度条开始
    nprogress.start();
    //config:是一个配置对象，对象里面有一个属性很重要，header请求头
    return config;
});
//响应拦截器
requests.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done();
    //成功返回回调函数：服务器相应数据回来以后，相应拦截器可以检测到，可以做一些事情
    return res.data;
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('false'))
});

//封装完之后进行对外暴露
export default requests;