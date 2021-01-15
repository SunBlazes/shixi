<template>
  <div>dayjs</div>
</template>
<script>
import dayjs from "dayjs";
export default {
  mounted() {
    // 月份起始索引为0
    console.log(dayjs("12-25-1995", "MM-DD-YYYY").month() + 1);
    // get   D:日期 d:星期
    console.log(
      dayjs(Date.now())
        .add(2, "day")
        .subtract(1, "year")
        .year(2010)
        .toISOString()
    );
    // 克隆的Day.js对象，并将其设置为一个时间单位的开始
    console.log(dayjs().startOf("year"));
    console.log(dayjs().format("YYYY-MM-DD hh:mm:ss A"));
  },
};
</script>
<style lang='scss' scoped>
</style>