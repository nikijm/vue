<template lang="html">
    <div>
    <h1>增加</h1>
    <InputElement v-model='student.name'>姓名:</InputElement>
    <InputElement v-model='student.age'>年龄:</InputElement>
    <GenderElement v-model='student.sex'></GenderElement>
    <input type="button" value="增加" @click='add'>
    </div>
</template>

<script>
import InputElement from "./InputElementS";
import GenderElement from "./GenderElement";
import {ajax} from "@/js/tools";
export default {
    props:["show","data"],
    data:function(){
        return {
            student:{
                name:"",
                age:"",
                sex:""
            }   
        }
    },
    methods:{
        add:function(){
            ajax({
                type:"get",
                url:"/student/add",
                data:{
                    name:this.student.name,
                    age:this.student.age,
                    sex:this.student.sex
                },
                success:function(data){
                    this.show(this.data.maxpage)

                }.bind(this)
            })

        }
    },
    components:{
        InputElement,
        GenderElement
    }
}
</script>

<style lang="css">
</style>
