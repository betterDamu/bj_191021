<template>
    <div class="header">
        <div class="top">
            <div class="left">
                <img
                        src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
                        class="avatar">
            </div>
            <div class="right">
                <div class="title">
                    <i class="brand"></i>
                    <span class="name">嘉禾一品（温都水城）</span>
                </div>
                <div class="info">
                    <span>硅谷专送/38分钟送达</span>
                </div>
                <div class="support">
                    <ele-icon class="icon" size="1" type="special"></ele-icon>
                    <span class="text">在线支付满100送老板,满200送店</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import icon from "components/ele-icon/ele-icon.vue"
    export default {
        name: "ele-header",
        components:{
            "ele-icon":icon
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .header
        background rgba(7,17,27,.5)
        .top
            display flex
            padding 24px 0 18px 24px
            .left
                width 64px
                height 64px
                margin-right 16px
                .avatar
                    width 100%
                    height 100%
                    border-radius 2px
            .right
                .title
                    center()
                    font-size 16px
                    line-height 18px
                    font-weight bold
                    color rgba(255,255,255,1)
                    margin-top 2px
                    margin-bottom 8px
                    .brand
                        bg-image(brand)
                        display inline-block
                        width 30px
                        height 18px
                        background-repeat no-repeat
                        background-size 100%
                        margin-right 6px
                .info
                    font-size 12px
                    line-height 12px
                    font-weight 200
                    color rgba(255,255,255,1)
                .support
                    center()
                    justify-content flex-start
                    font-size 10px
                    line-height 12px
                    font-weight 200
                    color rgba(255,255,255,1)
                    margin-top 10px
                    margin-bottom 2px
                    .icon
                        margin-right 4px
</style>