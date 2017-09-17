<template lang="html">
    <div>
        <label><slot></slot></label>
        <input :value='value' @input='updateValue'/>
    </div>
</template>

<script>
export default {
    props:['value'],
    methods:{
        updateValue:function(e){
            this.$emit("input",e.target.value);
        }
    }
}
</script>

<style lang="css">
</style>
