<template>
    <div>
        goods
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import {GETGOODS} from "store/mutation_types"
    export default {
        name: "ele-goods",
        methods:{
            ...mapActions([GETGOODS])
        },
        mounted(){
            this[GETGOODS]()
        }
    }
</script>

<style scoped>

</style>