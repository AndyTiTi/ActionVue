<template>
  <div class="home">
    <top-nav />
    <div class="intro">
      <h1>UI组件库</h1>
      <h2>基于 Vue 3 和 TypeScript 的 UI 框架</h2>
      <div class="links">
        <router-link to="/doc">查看文档</router-link>
        |
        <a href="https://github.com/wencaizhang/ActionVue" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav }
};
</script>

<style lang="scss" scoped>
.intro {
  margin: 50px auto;
}
</style>
