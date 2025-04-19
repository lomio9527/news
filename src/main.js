import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入element  引入 做完这一步即可引入11
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//引入图标
import './assets/fon-icon/iconfont.css'


//引入路由
import router from '@/router'
import VueRouter from "vue-router"


//引入vuex仓库 store';
import store from '@/store';

//测试新闻请求接口是否能用 这里是辨别暴露
/* import { reqlist } from '@/api/newslist.js';
reqlist();
 */

//引入全局重置样式文件
import './assets/reset.css';


//引入媒体查询


new Vue({
    render: h => h(App),
    //注册路由
    router,
    //注册vuex仓库store 这样组件身上就会多一个$store属性
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
}).$mount('#app')