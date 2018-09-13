<template>
    <div class="header">
        <div class="menu">
            <i class="icon iconfont icon-caidan active"></i>
        </div>
        <div class="center">
            <i class="icon iconfont icon-yinyue"></i>
            <i class="icon iconfont icon-tubiao active"></i>
            <i class="icon iconfont icon-shipin"></i>
        </div>
        <div class="search">
            <i class="icon iconfont icon-chazhao1" @click="search"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mHeader',
        methods: {
            search() {
                this.$router.push('/search')
            }
        }
    }
</script>

<style scoped lang="scss">
@import "@/common/css/base.scss";
@import "@/common/css/variable.scss";
    .header {
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        background: $color-theme;
        color: $color-text-ggg;
        font-size: $font-size-medium;
        padding-top: rem(30);
        text-align: center;
        .center {
            display: inline-flex;
            justify-content: space-around;
            width: rem(300);
        }
        .icon {
            font-size: $font-size-medium;
        }
        .active {
            color: white;
        }
    }
</style>