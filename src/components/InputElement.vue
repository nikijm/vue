<template lang="html">
    <div>
        <label><slot></slot></label>
        <input :type='type' :value='value' @input='updateValue'/>
        <span>{{info}}</span>
    </div>
</template>

<script>
export default {
    props:['value','info',"type"],
    methods:{
        updateValue:function(e){

            this.$emit("input",e.target.value);
        }
    }
}
</script>

<style lang="css">
</style>
