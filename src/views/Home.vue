<template>
  <div class="home">
    <m-header></m-header>
    <ul class="tab">
      <li
        v-for="(tab, key) in tabs"
        :key="key"
        :class="['tab-item', {active: key === currentTab}]"
        @click="currentTab = key"
      >
        <button>{{ tab }}</button>
      </li>
    </ul>
    <keep-alive>
      <component
        :is="currentTabComponent"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
  import recommendContent from "@/components/Home/recommendContent.vue";
  import friendContent from "@/components/Home/friendContent.vue";
  import fmContent from "@/components/Home/fmContent.vue";
  import mHeader from "@/components/header/mHeader.vue";
  
  export default {
    name: 'Home',
    components: {
      recommendContent,
      fmContent,
      friendContent,
      mHeader,
    },
    data: function () {
      return {
        tabs: {
          recommend: '推荐',
          friend: '朋友',
          fm: '电台',
        },
        currentTab: 'recommend',
      }
    },
    computed: {
      currentTabComponent: function () {
        return this.currentTab + 'Content'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/common/css/variable.scss";

  .home {
    position: relative;
    // line-height: 44px;
    
    width: 100%;
    font-size: $font-size-medium;
    
    .tab {
    background: $color-theme;
      height: 104px;
      display: flex;
      // margin: 15px 25px;
      margin-top: 0;
      .tab-item {
        flex: 1;
        margin-top: 3%;
        button {
          background: $color-theme;
          color: $color-text-l;
          padding: 3px 5px;
          outline: none;
        }
        &.active {
        button {
          font-weight: bold;
          color: $color-text-l;
          border-bottom: 2px solid $color-text-l;
        }
      }
      }
    }

    
  }
</style>