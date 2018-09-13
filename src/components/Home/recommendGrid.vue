<template>
    <div class="container">
        <header>
            <h3>{{ rTitle }}</h3>
        </header>
        <div class="grid">
            <li
                class="item"
                v-for="item in recommendList"
                :key="item.picUrl"
            >
                <img :src="item.picUrl" alt="123" v-if="rUrl == '' || rUrl == 'djprogram'">
                <img :src="item.song.album.picUrl" alt="123" v-if="rUrl == 'newsong'">
                <p class="description">{{ item.name }}</p>
            </li>
        </div>
    </div>
</template>

<script>
    import api from '@/common/js/api.js'
    import axios from 'axios'
    export default {
        name: 'recommendGrid',
        mounted(){
            var vm = this
            axios.get(api.config.personalized + this.rUrl)
                .then(function (response) {
                    var a = response.data.result.slice(0, 6)
                    for(var i = 0, len = a.length; i < len; i++) {
                        sessionStorage.setItem(`recommendPic${vm.rUrl}`, JSON.stringify(a))
                    }
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
        data: function () {
            return {
                recommendList: JSON.parse(sessionStorage.getItem(`recommendPic${this.rUrl}`))
            }
        },
        props: [
            'rTitle',
            'rUrl',
        ]
    }
</script>

<style scoped lang="scss">
    .container {
        header {
            text-align: left;
            margin-left: 5%;
            h3 {
                display: inline-block;
            }
            &::after {
                display: inline-block;
                content: '>';
                margin-left: 2%;
                font-size: 1.2rem;
            }
        }
        .grid {
            display: flex;
            flex-flow: wrap;
            width: 100%;
            .item {
                width: 30%;
                list-style: none;
                margin: 0 auto;
                margin-bottom: 1%;
                img {
                    width: 100%;
                }
                .description {
                line-height: 25px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
                p {
                    line-height: 25px;
                }
            }
        }
    }
</style>