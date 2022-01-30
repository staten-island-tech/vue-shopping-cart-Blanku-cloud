<template>
  <div>
    <div class="items">
      <img :src="image" alt="" class="img" />
      <h2 class="name">{{ name }}</h2>
      <h2 class="price">${{ price }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "listitem",
  props: {
    name: String,
    image: String,
    price: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img {
  width: 10%;
}
</style>
