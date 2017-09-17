<template lang="html">
    <div>
   <input type="button" value="计数" @click="add">
   <span>{{count}}</span>
    </div>
</template>

<script>

import {store} from "@/store";
import {mapState} from "vuex";
export default {
    methods:{
    add:function(){
    store.dispatch("ADD_COUNT",this.count+1)
    }
    },
    computed:mapState(["count"])
}
</script>

<style lang="css">
</style>
