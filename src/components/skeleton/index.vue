<template>
  <div class="card" :class="{ loading }">
    <div class="image"></div>
    <div class="content">
      <h4>{{ content }}</h4>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  data() {
    return {
      loading: false,
      content: "",
      description: "",
    };
  },
  async mounted() {
    this.loading = true;
    await new Promise((resolve) => setTimeout(() => resolve(), 5000));
    this.content = "ZhengShuWen";
    this.description =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ex quasi enim facere commodi omnis...";
    this.loading = false;
  },
};
</script>
<style lang='scss' scoped>
.card {
  width: 320px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);

  .image {
    height: 200px;
  }
  .content {
    padding: 2rem 1.8rem;
  }
  h4 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  .description {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  &.loading {
    @keyframes animate {
      from {
        background-position-x: 180%;
      }
      to {
        background-position-x: -20%;
      }
    }
    $loading-color: #ededed;
    .image,
    h4,
    .description {
      background-color: $loading-color;
      background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      );
      background-size: 200% 100%;
      animation: animate 1s ease-in-out infinite;
    }
    h4 {
      min-height: 1.6rem;
      border-radius: 4px;
      animation-delay: 0.05s;
    }
    .description {
      min-height: 4rem;
      border-radius: 4px;
      animation-delay: 0.06s;
    }
  }
}
</style>