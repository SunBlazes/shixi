<template>
  <div v-clickoutside="handleClickoutside">clickoutside</div>
</template>
<script>
import clickoutside from "../../directives/clickoutside";
export default {
  directives: {
    clickoutside,
  },
  methods: {
    handleClickoutside() {
      console.log("handleClickoutside");
    },
  },
};
</script>
<style lang='scss' scoped>
</style>