<template>
    <div class="search-result">
        <div class="item-list"
            v-for="(song, index) in result"
            :key="index"
            @click="playSong(index)"
        >
            <div class="song-info">
                <h3 class="song-title">{{ song.name }}</h3>
                <span class="song-album">{{ song.artists }} - {{ song.album }}</span>
            </div>
            <div class="list-icon">
                <i class="icon iconfont icon-shipin"></i>
                <i class="icon iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import api from '@/common/js/api.js'
    export default {
        name: 'searchResult',
        data: function () {
            return {
                result: [],
                songid: 0,
            }
        },
        created() {
            var vm = this
            var query = this.$route.query
            axios.get(api.config.searchResult + query.keywords)
                .then(function (res) {
                    // name, album.name, artists[0].name
                    var arr = res.data.result.songs
                    arr.forEach(function (item) {
                        vm.result.push({
                            id: item.id,
                            name: item.name,
                            album: item.album.name,
                            artists: item.artists[0].name
                        })
                    })
                    console.log('result', arr)
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
        methods: {
            playSong: function (index) {
                this.$store.commit('play', {
                    id: this.result[index]['id'],
                    artist: this.result[index]['artists'],
                })
                this.$router.push('/play')
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "@/common/css/variable.scss";
    .search-result {
        padding-top: 2%;
        padding-left: 2%;
        .item-list {
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: space-between;
            padding-top: 2%;
            padding-bottom: 2%;
            padding-right: 5%;
            border-bottom: 1px solid $color-text-gg;
            .song-info {
                width: 60%;
                h3 {
                    font-size: 1rem;
                    font-weight: 600;
                }
                .song-album {
                    font-size: 0.7rem;
                }
            }
            .list-icon {
                display: flex;
                flex: 0.5;
                justify-content: space-between;
            }
        }
    }
</style>