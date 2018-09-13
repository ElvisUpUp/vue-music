<template>
    <div class="fm">
        <swiper-component></swiper-component>
        <ul class="icon-menu">
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-tubiao"></i>
                </div>
                <p>电台分类</p>
            </li>
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-paixingbang1"></i>
                </div>
                <p>电台排行</p>
            </li>
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-huangguan"></i>
                </div>
                <p>付费精品</p>
            </li>
            <li>
                <div class="icon-wrap">
                    <i class="icon iconfont icon-bingqilin"></i>
                </div>
                <p>小冰电台</p>
            </li>
        </ul>
        <div class="fm-today">
            <header>
                <h3>今日优选</h3>
                <span class="fa fa-refresh fa-small">换一换</span>
            </header>
            <section class="fm-today-grid">
                <div class="fm-today-item"
                    v-for="item in recommend"
                    :key="item.id"
                >
                    <div class="item-img">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="item-introduce">
                        <h4 class="item-title">{{ item.name }}</h4>
                        <p>节目: {{ item.programCount }}</p>
                        <p>{{ item.rcmdtext }}</p>
                    </div>
                </div>
            </section>
        </div>
        <fm-category></fm-category>
    </div>
</template>

<script>
import api from '@/common/js/api.js'
import swiperComponent from "./swiperComponent.vue";
import fmCategory from "./fmCategory.vue";
import axios from 'axios'
export default {
    name: 'fmContent',
    components: {
        swiperComponent,
        fmCategory,
    },
    data: function () {
        return {
            recommend: JSON.parse(sessionStorage.getItem('dj-recommend'))
        }
    },
    mounted() {
        axios.get(api.config.djRecommend)
                .then(function (response) {
                    response.data.djRadios = response.data.djRadios.slice(0, 3)
                    sessionStorage.setItem('dj-recommend', JSON.stringify(response.data.djRadios))
                })
                .catch(function (err) {
                    console.log(err)
                })
    }
}
</script>

<style scoped lang="scss">
    @import "@/common/css/variable.scss";
    .fm {
        position: absolute;
        top: 62%;
        left: 10px;
        width: 95%;
        background: black;
        height: 100px;
        .icon-menu {
            display: flex;
            justify-content: space-around;
            padding-bottom: 0.1rem;
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
        .fm-today {
            width: 100%;
            header {
                text-align: left;
                margin-left: 5%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 5%;
            }
            span {
                width: 4rem;
                display: inline-flex;
                justify-content: space-between;
            }
            .fm-today-grid {
                width: 100%;
                .fm-today-item {
                    display: flex;
                    margin-bottom: 4%;
                }
                .item-img {
                    width: 30%;
                    margin-right: 3%;
                    line-height: 0;
                    img {
                        width: 100%;
                    }
                }
                .item-introduce {
                    flex: 1;
                    text-align: left;
                    line-height: 2rem;
                    border-bottom: 1px solid $color-dialog-background;
                }
            }
        }
    }
</style>
