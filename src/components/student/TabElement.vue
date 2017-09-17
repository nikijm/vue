<template lang="html">
    <table border='1'>
        <thead>
        <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>班级</th>
        <th>任课老师</th>
        <th>联系方式</th>
        <th>操作</th>
        </tr>
        </thead>
        <StudentItem :datas='data.rows' :show='show'></StudentItem>
        </table>
</template>

<script>
import StudentItem from "./StudentItem";
import {mapState} from "vuex";
export default {
    props:["data","show","setStudent"],
        components:{
        StudentItem
    },  
    computed:mapState({
        data:state=>state.studentStore.data
    })
}
</script>

<style lang="css">
</style>
