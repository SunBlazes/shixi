<template>
  <div>js-cookie</div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  created() {
    Cookies.set("name", "zsw");
    Cookies.set("age", "22");
    console.log(Cookies.get());
  },
};
</script>
<style lang='scss' scoped>
</style>