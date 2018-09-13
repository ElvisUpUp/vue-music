<template>
    <aplayer v-if="flag" :music="{
        title: title,
        artist: artist,
        src: url,
        pic: pic
    }" />
</template>

<script>
    import Aplayer from 'vue-aplayer'
    export default {
        name: 'mFooter',
        data: function () {
            return {
                // title, artist, url, pic
                title: this.$store.state.songTitle,
                artist: this.$store.state.artist,
                url: this.$store.state.songUrl,
                pic: this.$store.state.songPic,
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>