<template>
  <div>
     {{msg}}
  </div>
</template>

<script>
    export default {
        name: "demo",
        computed:{
          msg(){
            return this.$store.state.msg
          }
        }
    }
</script>

<style scoped>

</style>
