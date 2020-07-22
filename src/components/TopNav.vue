<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">ActionVue</router-link>
    </div>
    <ul class="menu">
      <li>捐款</li>
      <li>支持</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
}
</script>

<style scoped lang="scss">
.topnav {
  background-color: pink;
  display: flex;
  justify-content: center;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    justify-content: center;

    > li {
      display: inline-flex;
      margin: 0 1em;
    }
  }

}
</style>