<template>
    <div class="goods">
        <div class="typeList" ref="typeList">
            <ul class="list">
                <li class="type" :class="{active:index===currentIndex}"
                    v-for="(good,index) in goods" :key="index">
                    <ele-icon class="icon" v-show="good.type >= 0" size="3" :type="good.type"></ele-icon>
                    <span>{{good.name}}</span>
                </li>
            </ul>
        </div>
        <div class="foodList"></div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapActions,mapState} from "vuex";
    import {GETGOODS} from "store/mutation_types";
    export default {
        name: "ele-goods",
        data(){
          return {
              currentIndex:0
          }
        },
        computed:{
            ...mapState(["goods"])
        },
        methods:{
            ...mapActions([GETGOODS])
        },
        mounted(){
            this[GETGOODS]();
            //初始化滑屏
            new BScroll(this.$refs.typeList)
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .goods
        display flex
        position absolute
        top 174px
        bottom 50px
        left 0
        right 0
        .typeList
            flex 0 0 80px
            overflow hidden
            .list
                .type
                    center()
                    one-px(rgba(7,17,27,.1))
                    height 54px
                    padding 0 12px
                    font-size 12px
                    line-height 14px
                    color gray
                    background #f3f5f7
                    .icon
                        margin-right 3px
                    &.active
                        background #ffffff
                    &:after
                        width 56px
                        left 0px
                        right 0px
                        margin auto
                    &:last-child
                        border-none()
        .foodList
            flex 1
</style>