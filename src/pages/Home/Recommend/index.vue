<template>
<div class="alls">


 <div class="rec">
  <div class="recom">
      <ul class="recommends">
        <li class="tuijian"> <i class="iconfont">&#xe67e;</i><a title="" href="">新闻推荐</a></li>
        <li class="remen"> <router-link to="/channel"> <i class="iconfont">&#xe608;</i><a title="" href="">热门推荐</a></router-link></li>
        <li class="kuaibao" > <i class="iconfont">&#xe646;</i><a title="" href=""><router-link to="/shortmessage">新闻快报</router-link> </a></li>
        <li class="yihuo"> <i class="iconfont">&#xe62f;</i><a title="" href="">一些疑惑</a></li>
      </ul>
  </div>
  </div>
  </div>
</template>

<script>
//import '@/assets/logo/iconfont.css'

export default {
data() {
    return {
        isActive:true,
    }
},

}
</script>

<style scoped>

/* .alls{
    background: ;
}
 */
.rec{
    width: 1200px;
    height: 80px;
   overflow: hidden;
   margin: 0 auto;
}

.recom{
    overflow: hidden;
    width: 1200px;
    height: 80px;  
    color: black;   
    margin:0 auto ;
    
}



.recom li{
  
   font-size: 30px;
    text-align: center;
    float: left;
    margin-left: 140px;
    margin:0  70px 0 70px ;
    padding-top: 20px;
    
 
}

.recom li:hover{
    height: 80px;
    background-color: #f3f8ff;
    color: skyblue;
}
.recom li a{
text-decoration: none;               /* 去掉连接下划线  */

}

.recom li a:hover{
color: skyblue;
}

.recom i{
font-size: 40px;
}

/* 默认选择状态 */
.tuijian{
 background-color: #f3f8ff;
   width: 160px;
 height: 80px;
}




@media only screen and (max-width: 768px) {

    .alls{
    width: 420px;
}

    .rec{
    width: 420px;
    height: 40px;
   overflow: hidden;
   margin: 0 auto;
}

.recom{
    overflow: hidden;
    width: 420px;
    height: 40px;  
    color: black;   
    margin:0 auto ;
    
}


.recom li{
   font-size: 15px;
    text-align: center;
    float: left;
    
    margin:0  5px 0 15px ;
    padding-top: 10px;
    
 
}


.recom li:hover{
    height: 40px;
    background-color: #F2F5F4;
    color: blue;
}
.recom li a{
text-decoration: none;               /* 去掉连接下划线  */

}

.recom li a:hover{
color: blue;
}

.recom i{
font-size: 20px;
}

}

</style>