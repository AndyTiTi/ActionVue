<template>
  <div class="switch-demo">
    <a-switch v-model="value1" :textInline="textInline" activeText="按年付费" inactiveText="按月付费" />
    <br />
    <a-switch v-model="value2" :textInline="textInline" activeText="开" inactiveText="关" />
    <br />
    <a-switch v-model="value3" :textInline="textInline" activeText="1" inactiveText="0" />
    <br />
    <a-switch v-model="value4" :textInline="false" active-text="来一场永远不分手的恋爱" />
    <br />
    <a-button @click="textInline = !textInline">Toggle TextInline</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: false,
      textInline: false,
    };
  },
};
</script>

<style>
.switch-demo .a-switch {
  margin: 8px 0;
}
</style>
