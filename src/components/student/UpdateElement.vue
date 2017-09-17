<template lang="html">
    <div>
       <h1>修改</h1>
    <InputElement v-model='students.name'>姓名:</InputElement>
    <InputElement v-model='students.age'>年龄:</InputElement>
    <GenderElement v-model='students.sex'></GenderElement>
    <input type='button' value='修改' @click='editor' :show='show' >
    </div>
</template>

<script>
import InputElement from "./InputElementS";
import GenderElement from "./GenderElement";
import {ajax} from "@/js/tools";
import {mapState} from "vuex";
import {store} from "@/store";
export default {
    props:["show"],
    methods:{
        editor:function(){
            ajax({
                type:"get",
                url:"/student/update",
                data:{
                    _id:this.students._id,
                    name:this.students.name,
                    age:this.students.age,
                    sex:this.students.sex
                },
                success:function(){
                    this.show()
                }.bind(this)
            })

        }
    }, 
    computed:mapState({
        students:state=>state.studentStore.students
    }),
    components:{
        InputElement,
        GenderElement
    }
}
</script>

<style lang="css">
</style>
