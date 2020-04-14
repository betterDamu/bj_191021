<template>
    <!--
        class='stars stars-24'
        class='stars stars-36'
        class='stars stars-48'
    -->
    <div class="stars" :class="`stars-${size}`">
        <div class="star" :class="item"
             v-for="(item,index) in scoreArr" :key="index"></div>
    </div>
</template>

<script>
    export default {
        name: "ele-stars",
        data(){
          return {
              //根据分数得到下面这样的数组
              scoreArr:["on","on","on","half","off"]
          }
        },
        props:{
            size:String,
            score:Number
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .stars
        display inline-flex
        .star
            background-repeat no-repeat
            background-size 100%
        &.stars-24
            .star
                width 10px
                height 10px
                margin-right 6px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star24_on)
                &.half
                    bg-image(star24_half)
                &.off
                    bg-image(star24_off)
        &.stars-36
            .star
                width 15px
                height 15px
                margin-right 9px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star36_on)
                &.half
                    bg-image(star36_half)
                &.off
                    bg-image(star36_off)
        &.stars-48
            .star
                width 20px
                height 20px
                margin-right 12px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star48_on)
                &.half
                    bg-image(star48_half)
                &.off
                    bg-image(star48_off)
</style>