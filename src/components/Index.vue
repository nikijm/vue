<template lang="html">
  <div >
      <header>
        <h1>logo</h1>
          <ul>
              <li> <a href="#reg">注册</a></li>
              <li> <a href="#login"><span v-if='loginS'>登录</span>
              <span v-if='isShow'>{{user.userName}}<a @click='logout'>安全退出</a>
              </span></a></li>
              <li><a href="#student">学生管理</a></li>
          </ul>
      </header>
      <router-view></router-view>
      <footer>
          <h1>xxxxx</h1>
      </footer>
  </div>
</template>

<script>
import {ajax} from "@/js/tools";
export default {

data:function(){
return {
    user:{},
    isShow:false,
    loginS:true
}
},
updated:function(){
      this.getSession()
  },
methods:{
getSession(){
    ajax({
      type:"get",
      url:"/getSession",
      success:function(data){
        console.log("getsession",data)
        if(data.userName){
          this.user=data
          this.isShow=true
          this.loginS=false
        }
        
      }.bind(this)
    })
  },
  logout(){
    ajax({
      type:"get",
      url:"/logout",
      success:function(){

          this.user={}
       this.isShow=false
       this.loginS=true

      }.bind(this)
    })
  }

 
  }
}
</script>

<style lang="css" >

</style>
