<template>
  <div class="card">
    <h2 class="item-name">{{ name }}</h2>
    <img :src="image" alt="" class="item-img" />
    <h3 class="item-price">{{ price }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    img: String,
    price: Number,
  },
};
</script>

<style scoped>
.card {
  border: 0.625rem solid black;
  width: 26.125rem;
  height: 26.125rem;
  border-radius: 1.25rem;
}
.item-img {
  width: 55%;
}
.item-name,
.item-price {
  width: fit-content;
  margin: 0 auto;
}
.item-name {
  margin-top: 0.313rem;
}
.item-price {
  margin-top: 0.625rem;
}
</style>
