<template>
  <div id="app">
    <!-- <clipboard /> -->
    <!-- <cookies /> -->
    <!-- <skeleton /> -->
    <!-- <space /> -->
    <css3d />
    <!-- <test /> -->
  </div>
</template>

<script>
import Clipboard from "./components/clipborad";
import Cookies from "./components/js-cookie";
import Skeleton from "./components/skeleton";
import Space from "./components/space-loading";
import Css3d from "./components/css3-3d";
import Test from "./components/clickoutside";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
export default {
  name: "App",
  components: {
    Clipboard,
    Cookies,
    Skeleton,
    Space,
    Css3d,
    Test,
  },
  async mounted() {
    nprogress.start();
    // nprogress.inc(0.4);
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    // 设置进度条的进度
    // nprogress.set(0.5);
    // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    nprogress.done();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f6f6f6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 100vh;
}
</style>
