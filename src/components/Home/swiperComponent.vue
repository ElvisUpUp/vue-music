<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="item in bannersPic"
                :key="item.picUrl"
            >
                <img :src="item.picUrl" alt="123">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import axios from 'axios'
    import api from '@/common/js/api.js'
    import 'swiper/dist/css/swiper.min.css'

    export default {
        name: 'swiperComponent',
        mounted(){
            var vm = this
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要滚动条
                scrollbar: '.swiper-scrollbar',
                autoplay: true,
            })     
            axios.get(api.config.homeSwiper)
                .then(function (response) {
                    sessionStorage.setItem('picUrl', JSON.stringify(response.data.banners))
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
        data: function () {
            return {
                bannersPic: JSON.parse(sessionStorage.getItem('picUrl'))
            }
        },
    }
</script>

<style scoped lang="scss">
    img {
        width: 100%;
    }
</style>