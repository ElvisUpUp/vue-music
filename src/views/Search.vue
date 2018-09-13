<template>
    <div class="search" @keyup.enter="search">
        <header class="search-header">
            <div class="search-input">
                <div class="search-icon">
                    <i class="icon iconfont icon-chazhao"></i>
                </div>
                <input type="search" name="" id="" v-model="searchText" @input="searchAdvice">
                <div class="cancel-icon">
                    <i class="icon iconfont icon-shanchu"></i>
                </div>
            </div>
            <button class="cancel-button" @click="cancelSearch">取消</button>
        </header>
        <section class="search-content" v-if="!checkInput && !isSearch">
            <header class="singer-classify">
                <div class="classify-icon">
                    <i class="icon iconfont icon-nanren"></i>
                </div>
                <span>歌手分类 ></span>
            </header>
            <section class="hot-search">
                <h3>热门搜索</h3>
                <div 
                    class="hot-item-grid"
                >
                    <div 
                        class="hot-item"
                        v-for="item in hotList"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
                <!-- <div class="history"></div> -->
            </section>
        </section>
        <section
            class="search-advice"
            v-else-if="checkInput && !isSearch"
        >
            <div class="item search-word">搜索 "{{ searchText }}"</div>
            <div 
                class="search-advice-item"
                v-for="(item, order) in adviceList"
                :key="order"
            >
                <div
                    v-for="(value, index) in item"
                    :key="index"
                    class="item"
                >
                    <div class="search-icon">
                        <i class="icon iconfont icon-chazhao"></i>
                    </div>
                    <p class="itemName">{{ value.name }}</p>
                </div>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios'
    import api from '@/common/js/api.js'
    // import searchResult from "@/components/search/searchResult.vue"
    export default {
        components: {
            // searchResult,
        },
        data: function () {
            return {
                hotList: [],
                searchText: '',
                adviceList: {},
                searchOrder: [],
                isSearch: true,
            }
        },
        computed: {
            checkInput: function () {
                return this.searchText ? true : false
            }
        },
        created() {
            var vm = this
            // 热搜
            axios.get(api.config.hotSearch)
                .then(function (res) {
                    var arr = res.data.result.hots
                    arr.forEach(function (item, index) {
                        sessionStorage.setItem(`hot-item${index}`, item.first)
                        vm.hotList.push(sessionStorage.getItem(`hot-item${index}`))
                    })
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
        methods: {
            searchAdvice: function () {
                this.isSearch = false
                var vm = this
                // 搜索建议
                axios.get(api.config.searchSuggest + this.searchText)
                    .then(function (res) {
                        res.data.result.order.forEach(function (item) {
                            // this.searchOrder.push(item)
                            vm.$set(vm.adviceList, item, res.data.result[item])
                        })
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            search: function () {
                this.isSearch = true
                this.$router.push('/search/result?keywords=' + this.searchText)
                this.searchText = ''
            },
            cancelSearch: function () {
                this.$router.push('/index')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/common/css/variable.scss";
    .search {
        .search-header {
            background: $color-theme;
            padding: 4% 3% 2% 3%;
            display: flex;
            justify-content: space-between;
            .search-input {
                position: relative;
                width: 85%;
                .search-icon {
                    position: absolute;
                    left: 4%;
                    top: 20%;
                    color: $color-text-lm;
                }
                .cancel-icon {
                    position: absolute;
                    right: 4%;
                    top: 20%;
                    color: $color-text-g;
                }
                input[type="search"] {
                    padding: 2% 14%;
                    color: white;
                    background: $color-sub-theme;
                    width: 100%;
                    border: none;
                    font-size: 0.6rem;
                    font-weight: 200;
                    border-radius: 20px;
                }
                input::-webkit-search-cancel-button {display: none;}
            }
            .cancel-button {
                outline: none;
                border: none;
                background: $color-theme;
                color: white;
                font-size: 1rem;
                font-weight: 100;
            }
        }
        .singer-classify {
            text-align: center;
            padding: 3% 0;
            border-bottom: 1px solid $color-text-gg;
            color: $color-text-g;
            .classify-icon {
                display: inline-block;
                margin-right: 2%;
            }
        }
        .hot-search {
            width: 90%;
            margin: 0 auto;
            margin-top: 2%; 
            h3 {
                font-size: 0.7rem;
                font-weight: normal;
                color: $color-text-g;
                text-align: left;
            }
            .hot-item-grid {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .hot-item {
                    margin-top: 2%;
                    border: 1px solid $color-text-gg;
                    border-radius: 20px;
                    padding: 2% 3%;
                    font-size: 0.6rem;
                }
            }
        }
        .search-advice {
            margin-left: 2%;
            text-align: left;
            .search-word {
                padding: 2% 0;
                color: #4783c0;
                font-size: 0.7rem;
                border-bottom: 1px solid $color-text-gg;
            }
            .search-icon {
                display: inline-block;
                margin-right: 10px;
            }
            .item {
                // height: 20%;
                // padding: 2% 0;
                display: flex;
                align-items: center;
            }
            .itemName {
                flex: 1;
                padding: 2% 0;
                border-bottom: 1px solid $color-text-gg;
            }
        }
    }
</style>