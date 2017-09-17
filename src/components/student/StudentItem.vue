<template lang="html">
    <tbody>
            <tr v-for='item in datas'>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.classes}}</td>
            <td>{{item.teacher}}</td>
            <td>{{item.phone}}</td>
            <td><button @click='update(item._id)' >修改</button><button @click='del(item._id)'>删除</button></td>
            </tr>
        </tbody>
</template>

<script>
import {ajax} from "@/js/tools";
import {store} from "@/store";
import {SHOW_DATA,SHOW_STUDENT} from "@/store/student"
export default {
    props:["datas","show"],
        methods:{
            update:function(id){
                console.log(id)
                ajax({
                    type:"get",
                    url:"/student/find",
                    data:{
                        _id:id
                    },
                    success:function(data){
                        store.commit(SHOW_STUDENT,data);
                    }.bind(this)
                })
            },
            del:function(id){
                ajax({
                    type:"get",
                    url:"/student/del",
                    data:{
                        _id:id
                    },
                    success:function(){
                        this.show()
                    }.bind(this)
                })

            }
        }   
}
</script>

<style lang="css">
</style>
