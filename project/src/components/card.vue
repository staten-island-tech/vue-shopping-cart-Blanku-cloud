<template>
  <div class="card">
    <h2 class="item-name">{{ title }}</h2>
    <img src="" alt="" class="item-img" />
    <h3 class="item-price">{{ description }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
    price: Number,
  },
  name: "Card",
};
</script>

<style scoped>
.card {
  border: 0.625rem solid black;
  width: 23.125rem;
  height: 23.125rem;
  border-radius: 1.25rem;
}
.item-img {
  width: 18.75rem;
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
