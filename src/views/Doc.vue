<template>
  <div class="doc">
    <TopNav />
    <div class="content">
      <Aside />
      <Main />
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import Aside from '../components/Doc/Aside.vue'
import Main from '../components/Doc/Main.vue'
export default {
  components: { TopNav, Aside, Main }
};
</script>

<style lang="scss" scoped>
.doc {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

}

</style>