<template lang="html">
    <div>
    <h1>搜索</h1>
    <select v-model='type'>
    <option value='name'>姓名</option>
    <option value='age'>年龄</option>
    <option value='sex'>性别</option>
    </select>
    <input type="text" v-model='value'>
    <input type="button" value='搜索' @click='search'>
    </div>
</template>

<script>
export default {
   props:["show"],
    data:function(){
        return {
            type:"姓名",
            value:""
        }
        
    },
    methods:{
        search:function(){
        this.show(1,this.type,this.value)
        }
    }

}
</script>

<style lang="css">
</style>
