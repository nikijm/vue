<template lang="html">
    <div>
    <a @click='prev'>上一页</a>
    <span>{{data.curpage}}/{{data.maxpage}}</span>
    <a @click='next'>下一页</a>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    props:["show","type","value"],
    methods:{
        prev:function(){
            if(this.data.curpage>1){
                this.show(this.data.curpage-1,this.type,this.value)
            }
        },
        next:function(){
            console.log(this.data.curpage)
            if(this.data.curpage<this.data.maxpage){
                this.show(parseInt(this.data.curpage)+1,this.type,this.value)
            }
        }


    },
     computed:mapState({
        data:state=>state.studentStore.data
    })
}
</script>

<style lang="css">
</style>
