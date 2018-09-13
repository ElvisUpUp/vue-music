import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songUrl: '',
    songId: '',
    artist: '',
    songPic: '',
    songTitle: '',
  },
  mutations: {
    play (state, payload) {
      state.songId = payload.id
      state.artist = payload.artist
    },
    getInfo (state, payload) {
      state.artist = payload.artist
      state.songPic = payload.picUrl
      state.songTitle = payload.songTitle
      state.songUrl = payload.songUrl
    }
  },
  actions: {

  }
})
