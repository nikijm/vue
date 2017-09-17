<template lang="html">
    <div>
        <label>性别:</label>
        <input type='radio' name='gender' value='男' @change='showGenderValue' :checked="value=='男'"/><label>男</label>
        <input type='radio' name='gender' value='女' @change='showGenderValue' :checked="value=='女'"/><label>女</label>
    </div>
</template>

<script>
export default {
    props:["value"],
    methods:{
        showGenderValue:function(e){

            this.$emit("input",e.target.value);
        }
    }
}
</script>

<style lang="css">
</style>
