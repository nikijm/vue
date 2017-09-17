<template lang="html">
    <div>
    <h1>学生管理系统</h1>
    <AddElement :show='show'></AddElement>
    <UpdateElement :show='show'></UpdateElement>
    <SearchElement :show='show'></SearchElement>
    <TabElement :show='show'></TabElement>
    <Page :show='show' :type='type' :value='value'></Page>
    </div>
</template>

<script>
import TabElement from "./TabElement";
import AddElement from "./AddElement";
import UpdateElement from "./UpdateElement";
import SearchElement from "./SearchElement";
import Page from "./Page";
import {ajax} from "@/js/tools";
import {store} from "@/store";
import {SHOW_DATA,SHOW_STUDENT} from "@/store/student";

export default {
   data:function(){
        return {
            type:"",
            value:""
        }
    },
    created:function(){
        this.show()
    },
    methods:{
        show:function(page,type,value){
        var param={
                    page:page,
                    rows:5
            }
            if(type){
                param[type]=value

            }
            this.type=type;
            this.value=value
            ajax({
                type:"get",
                url:"/student/find",
                data:param,
                success:function(data){
                    store.commit(SHOW_DATA,data)
                }.bind(this)
            })
        }
    },
    components:{
    TabElement,
    AddElement,
    UpdateElement,
    SearchElement,
    Page
    }
}
</script>

<style lang="css">
</style>
