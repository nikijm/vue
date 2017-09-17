<template lang="html">
    <div class="font">
        <h1>注册</h1>
        <form>
            <InputElement v-model='username.value' :info='username.info' :type='username.type'>用户名：</InputElement>
            <InputElement v-model='pwd.value' :type='pwd.type' :info='pwd.info'>密码：</InputElement>
            <InputElement v-model='checkPwd.value' :type='checkPwd.type' :info='checkPwd.info'>确认密码：</InputElement>
            <InputElement :type='email.type' v-model='email.value' :info='email.info'>email：</InputElement>
            <input type="button" value="注册" @click='reg' />
        </form>
    </div>
</template>

<script>
import InputElement from "./InputElement";
import {ajax} from "@/js/tools";
import router from "@/router"
export default {
    data:function(){
        return {
            username:{
                value:'',
                info:'',
                type:"text",
                isValid:false
            },
            pwd:{
                value:'',
                info:'',
                type:"password",
                isValid:false
            },
            checkPwd:{
                value:'',
                info:'',
                type:"password",
                isValid:false
            },
            email:{
                value:"",
                info:"",
                type:"text",
                isVaild:false
            }
        }
    },
   watch:{
        "username.value":function(value){
            if(/^\w{6,18}$/.test(value)){
                this.username.info="√"
                this.username.isVaild=true

            }else{
                this.username.info="请输入6~18位的数字字母下划线"
            }
        
    },
    "pwd.value":function(value){
            if(/^.{6,20}$/.test(value)){
                this.pwd.info="√"
                this.pwd.isVaild=true
            }else{
                this.pwd.info="×"
            }
        
    },
    "checkPwd.value":function(value){
            if(this.pwd.value==value){
                this.checkPwd.info="√"
                this.checkPwd.isVaild=true
            }else{
                this.checkPwd.info="密码不匹配"
            }
        
    },
    "email.value":function(value){
            if(/^[0-9A-Za-z]{3,6}@[0-9A-Za-z]{3,6}\.[0-9A-Za-z]{3,6}$/.test(value)){
                this.email.info="√"
                this.email.isVaild=true
            }else{
                this.email.info="邮箱格式不对"
            }
        
    }

},
methods:{
    reg:function(){
        if(this.username.isVaild&&this.pwd.isVaild&&this.checkPwd.isVaild&&this.email.isVaild){
            ajax({
                type:"get",
                url:"/student/find",
                success:function(data){
                    if(data.length>0){
                        router.push("/login")
                    }
                }.bind(this)
            })
        }

    }

},
components:{
        InputElement:InputElement
    }
}
</script>

<style lang="css" scoped>
    .font{
        color:red
    }
</style>
