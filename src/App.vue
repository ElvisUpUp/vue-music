<template>
  <div id="app">
    <!-- <m-header></m-header> -->
    <router-view/>
  </div>
</template>

<script>
import mHeader from "@/components/header/mHeader.vue";
export default {
  components: {
    mHeader
  }
}
</script>


<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
