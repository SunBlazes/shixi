<template>
  <div class="css3d">
    <div class="img"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.css3d {
  .img {
    width: 200px;
    height: 200px;
    background-image: url(../../assets/logo.png);
    // transform: translateZ(-5px);
    transform: rotateZ(50deg);
    background-size: 100% 100%;
  }
  perspective: 1000px;
  transform-style: preserve-3d;
}
</style>