<template>
  <div>
      <!-- 焦点按钮部分 -->
      <div class="channel">
      <div class="focus-channel">
          <span>|</span> 焦点频道
      </div>
      <el-row class="focus-btn" 
      
      >
       <el-button class="focus-btn-a" @click="goFocus(focus.channelId)" 
       v-for="(focus,indexs) in channelLists.slice(0,14)" :key="focus.channelId">
       {{focus.name}}
       </el-button>
       </el-row>
      </div>

       <!-- 焦点按钮部分 -->
      <div class="channel">
      <div class="focus-channel">
          <span>|</span> 最新频道
      </div>
      <el-row class="focus-btn">

       <el-button  class="focus-btn-a" @click="goFocus(news.channelId)"
       v-for="(news,indexss) in channelLists.slice(14,45)" :key="news.channelId">{{news.name}}</el-button>
       

       </el-row>
      </div>

       <!-- 焦点按钮部分 -->
      <div class="channel">
      <div class="focus-channel">
          <span>|</span> 焦点频道
      </div>
      <el-row class="focus-btn">
       <el-button class="focus-btn-a" @click="goFocus(other.channelId)"
       v-for="(other,indexsss) in channelLists.slice(45,49)" :key="other.channelId">{{other.name}}</el-button>
       </el-row>
      </div>
  </div>

</template>

<script>
import{mapGetters} from 'vuex';
export default {

data() {
    return {
        keyword:'',
    }
},


/* mounted(){
    this.$store.dispatch("getChannel");
   
},
 */
computed:{
    ...mapGetters(['channelLists']),
    
},

methods: {
   /*  goFocus(channelId){
        //console.log(channelId);
        //k是随便定义的 怎么命名都可以 传递query参数的
       // this.$router.push({path:"/channellist",query:{channelId}});

    } */

     goFocus(channelId) {
      
     // this.$store.commit('xinwenid', channelId);
      this.$router.push({path:"/channellist",query:{channelId}});
      
    }
},

created(){
   
 
    
}

}
</script>

<style scoped>
/* 大盒子 */
.channel{
    width: 1500px;
    height: 100%;
    margin: 0 auto;
}
/* 焦点文字 */
.focus-channel{
    font-size: 18px;
    margin-top: 40px;
   
    height: 30px;
    width: 100%;
   
}

/* 焦点部分的按钮 */
.focus-btn-a{
   
    height: 50px;
    /* 按钮宽度不设置会根据字体多少大小来自动调节 */
    width:  130px; 
    margin:40px 40px 0 40px;
 
 
    margin-left: 15px !important;

}

.el-button{
    display: inline-block;
text-align: center;
}




@media only screen and (max-width: 768px) {
    .channel{
    width: 420px;
    height: 100%;
    margin: 0 auto;
}
/* 焦点文字 */
.focus-channel{
    font-size: 18px;
    margin-top: 40px;
   padding-left: 20px;
    height: 30px;
    width: 100%;
  
   
}

/* 焦点部分的按钮 */
.focus-btn-a{
   
    height: 50px;
    /* 按钮宽度不设置会根据字体多少大小来自动调节 */
    width:  130px; 
    margin:40px 40px 0 40px;
    margin-left: 35px !important;

}

.el-button{
    display: inline-block;
text-align: center;
}
}
</style>