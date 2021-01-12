<template>
  <div id="app">
    <!-- <clipboard /> -->
    <!-- <cookies /> -->
    <skeleton />
    <!-- <space /> -->
    <!-- <css3d /> -->
  </div>
</template>

<script>
import Clipboard from "./components/clipborad";
import Cookies from "./components/js-cookie";
import Skeleton from "./components/skeleton";
import Space from "./components/space-loading";
import Css3d from "./components/css3-3d";
export default {
  name: "App",
  components: {
    Clipboard,
    Cookies,
    Skeleton,
    Space,
    Css3d,
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
  min-height: 100vh;
}
</style>
