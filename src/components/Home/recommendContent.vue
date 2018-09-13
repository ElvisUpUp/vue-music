<template>
    <div class="recommend">
        <swiper-component></swiper-component>
        <ul class="icon-menu">
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-shumatubiaozhizuochunsezhuanqu-"></i>
                </div>
                <p>私人FM</p>
            </li>
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-rili"></i>
                </div>
                <p>日历</p>
            </li>
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-gedan"></i>
                </div>
                <p>歌单</p>
            </li>
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-paixingbang"></i>
                </div>
                <p>排行榜</p>
            </li>
        </ul>
        <recommend-grid
            v-for="(url, title) in recommendTitle"
            :key="title"
            :rTitle="title"
            :rUrl="url"
        ></recommend-grid>
    </div>
</template>

<script>
    import swiperComponent from "./swiperComponent.vue";
    import recommendGrid from "./recommendGrid.vue";
    export default {
        name: 'recommendContent',
        components: {
            swiperComponent,
            recommendGrid,
        },
        data: function () {
            return {
                recommendTitle: {
                    '推荐歌单': '', 
                    '最新音乐': 'newsong', 
                    '主播电台': 'djprogram',
                },
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/common/css/variable.scss";   
    .recommend {
        position: absolute;
        top: 62%;
        left: 10px;
        width: 95%;
        background: black;
        height: 100px;
        
        .icon-menu {
            display: flex;
            justify-content: space-around;
            padding-bottom: 1%;
            line-height: 40px;
            border-bottom: 1px solid $color-dialog-background;
            li {
                width: 60px;
                height: 100px;
                .icon-wrap {
                    width: 40px;
                    height: 40px;
                    background: $color-theme;
                    border-radius: 50%;
                    margin: 0 auto;
                    text-align: center;
                    color: white;
                    .icon {
                        font-size: 1.2rem;
                    }
                }
                img {
                    width: 50%;
                }
            }
        }
    }
</style>