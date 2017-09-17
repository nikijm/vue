<template lang="html">
    <div class="font">
        <h1>登录</h1>
        <form class="myform">
            <InputElement v-model='username.value' :type='username.type' >用户名：</InputElement>
            <InputElement v-model='pwd.value' :type='pwd.type'>密码：</InputElement>

            <input type="button" value="登录" @click='loginF' />
        </form>
    </div>
</template>

<script>
import InputElement from "./InputElement";
import {ajax} from "@/js/tools";
import router from "@/router";
export default {
    data:function(){
        return {
            username:{
               value:"",
                type:"text"
            },
            pwd:{
                value:"",
            type:"password"
            }

        }
    },

    methods:{
        loginF:function(){

             ajax({
                    type:"get",
                    url:"/users/find",
                    data:{
                        userName:this.username.value,
                        pwd:this.pwd.value,
                        findType:"exact",
                        addSession:1
                    },
                    success:(data)=>{
                        if(data.length>0){
                            router.push("/student")
                        }else{
                            alert("用户名或密码错误")
                        }
                    }
            })
        }
    },
    components:{
        InputElement:InputElement
    }
}
</script>

<style lang="css" scoped>
    .font{
        color:blue
    }
 
</style>
