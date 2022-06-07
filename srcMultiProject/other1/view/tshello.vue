<template>
    <div>{{msg}}</div>
</template>


<script>
export default {
     data() {
        return {
            msg: 'hello other2'
        }
    },
    created() {
        console.log(this.msg)
    }
}
</script>
