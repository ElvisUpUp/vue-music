<template>
    <div class="play">
        <header class="play-header">
            <div class="back-icon" @click="back">
                <i class="icon iconfont icon-houtui"></i>
            </div>
            <div class="song-title">
                <p>{{ songTitle }}</p>
                <p>{{ songArtist }}</p>
            </div>
            <div class="share-icon">
                <i class="icon iconfont icon-fenxiang"></i>
            </div>
        </header>
        <section class="song-info">
            <div class="song-image">
                <img :src="songPicUrl" alt="">
            </div>
            <div class="song-icon">
                <i class="icon iconfont icon-like"></i>
                <i class="icon iconfont icon-xiazai"></i>
                <i class="icon iconfont icon-weibiaoti-"></i>
                <i class="icon iconfont icon-gengduo1"></i>
            </div>
        </section>
        <footer class="player-control">
            
            <audio preload="undefined" :src="url" @durationchange="songDuration" @timeupdate="updateTime($event)"></audio>
            
            <div class="controller">
                <div class="bar-wrap">
                    <div class="bar">
                        <div class="played" :style="{width: percentTime}">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="player-time">
                    <div class="aplayer-time-inner">
                        -
                        <span class="aplayer-ptime">{{ format(currentTime) }}</span> /
                        <span class="aplayer-dtime">{{ format(duration) }}</span>
                    </div>              
                </div>
            </div>
            <div class="control-icon">
                <i class="icon iconfont icon-icon-"></i>
                <i class="icon iconfont icon-48shangyishou"></i>
                <i class="icon iconfont icon-bofang" @click="playControl"></i>
                <i class="icon iconfont icon-49xiayishou"></i>
                <i class="icon iconfont icon-liebiao"></i>
            </div>
        </footer>
        
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    import mFooter from '@/components/footer/mFooter.vue'
    import axios from 'axios'
    import api from '@/common/js/api.js'
    export default {
        components: {
            Aplayer,
            mFooter,
        },
        data: function () {
            return {
                url: "http://music.163.com/song/media/outer/url?id=" + this.$store.state.songId + ".mp3",
                songPicUrl: '',
                songTitle: '',
                songArtist: this.$store.state.artist,
                flag: false,
                status: 0, // 0 -> pause, 1 -> start
                duration: 0,
                currentTime: 0,
            }
        },
        created() {
            var vm = this
            axios.get(api.config.songDetails + this.$store.state.songId)
                .then(function (res) {
                    var song = res.data.songs[0]
                    vm.songTitle = res.data.songs[0].name
                    vm.songPicUrl = res.data.songs[0].al.picUrl
                    vm.$store.commit('getInfo', {
                        artist: song.ar[0].name,
                        picUrl: song.al.picUrl,
                        songTitle: song.name,
                        songUrl: vm.url,
                    })
                    vm.flag = true
                })
        },
        methods: {
            playControl: function () {
                var audio = document.getElementsByTagName('audio')[0]
                if (this.status) {
                    audio.pause()
                    this.status = 0
                } else if (!this.status) {
                    audio.play()
                    this.status = 1
                }
            },
            songDuration: function () {
                this.duration = document.getElementsByTagName('audio')[0].duration
            },
            updateTime: function (e) {
                this.currentTime = e.target.currentTime
            },
            format(interval){
                interval = interval | 0;
                const minute = interval/60 | 0;
                const second = this._pad(interval % 60);
                return `${minute}:${second}`;  
            },
            // 去零
            _pad(num,n=2){
                let len = num.toString().length;
                while(len<n){
                num = '0' + num;
                len ++;
                }
                return num;
            },
            back() {
                this.$router.back();
            }
        },
        computed: {
            percentTime: function () {
                var point = this.currentTime / this.duration
                var str=Number(point*100).toFixed(2);
                str+="%";
                return str;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/common/css/variable.scss";
    @import "@/common/css/base.scss";
    .play {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        padding: 5%;
        .play-header {
            display: flex;
            justify-content: space-between;
        }
        .song-info {
            width: 100%;
            height: 60%;
            padding-top: 20%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .song-image {
                width: 15rem;
                height: 15rem;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 10%;
                img {
                    width: 100%;
                }
            }
            .song-icon {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 0 10%;
                .icon {
                    font-size: 1.5rem;
                    color: black;
                }
            }
        }
        .player-control {
            .control-icon {
                display: flex;
                justify-content: space-between;
                padding: 0 3%;
                .icon {
                    font-size: 1.6rem;
                }
            }
            .controller {
                display: flex;
                align-items: center;
                margin-bottom: 20%;
                margin-top: 20%;
                .bar-wrap {
                    flex: 1;
                    .bar {
                        position: relative;
                        height: 2px;
                        width: 100%;
                        background: #cdcdcd;
                        .played {
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            height: 2px;
                            -webkit-transition: background-color .3s;
                            transition: background-color .3s;
                            will-change: width;
                            background-color: rgb(65, 184, 131);
                            span {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -5px;
                                margin-right: -10px;
                                width: 10px;
                                height: 10px;
                                border: 1px solid rgb(65, 184, 131);
                                border-radius: 50%;
                                border-color: rgb(65, 184, 131);
                                background-color: rgb(255, 255, 255);
                            }
                        }
                    }
                }
                .player-time {
                    height: 17px;
                    color: #999;
                    font-size: 11px;
                    padding-left: 7px;
                }
            }
        }
    }
</style>