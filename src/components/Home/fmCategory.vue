<template>
    <div class="container">
        <div 
            class="category"
            v-for="item in categoryItem"
            :key="item[0].categoryId"
        >
            <header>
                <h3>{{ item[0].category }}</h3>
            </header>
            <div class="grid">
                <li
                    class="item"
                    v-if="index < 3"
                    v-for="(value, index) in categoryItem"
                    :key="index"
                >
                    <div class="item-img">
                        <img :src="item[index].picUrl" alt="">
                    </div>
                    <div class="description">
                        <p>{{ item[index].rcmdtext }}</p>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import api from '@/common/js/api.js'
    export default {
        name: 'fmCategory',
        data: function () {
            return {
                categoryList: {}, // 种类的名字和ID
                categoryItem: [], // 一个种类里的推荐节目 => {category: [[name, picUrl, rcmdtext]]}
            }
        },
        created() {
            var vm = this
            axios.get(api.config.djCategories)
                .then(function (response) {
                    var arr = response.data.categories
                    arr.forEach(function (item) {
                        axios.get(api.config.djTypeRecommend + item.id)
                            .then(function (response) {
                                vm.categoryItem.push(response.data.djRadios)
                            })
                            .catch(function (err) {
                                console.log(err)
                            })
                    })
                })
                .catch(function (err) {
                    console.log(err)
                })
                // console.log(this.categoryItem)
        }
    }
</script>

<style scoped lang="scss">
@import "@/common/css/variable.scss";
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
        margin: 10px 0;
        .item {
            width: 30%;
            list-style: none;
            margin: 0 auto;
            margin-bottom: 1%;
            .item-img {
                line-height: 0;
                width: 107px;
                height: 107px;
                overflow: hidden;
                img {
                    width: 100%;
                }
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
            }
        }
    }
}
</style>