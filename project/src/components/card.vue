<template>
  <div class="card">
<<<<<<< Updated upstream
    <h2 class="item-name">{{ name }}</h2>
    <img :src="image" alt="" class="item-img" />
    <div class="container">
      <h3 class="item-price">${{ price }}</h3>
      <span class="button-holder"><slot></slot></span>
    </div>
=======
    <h2 class="item">Mew</h2>
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
      alt="picture of mew"
    />
    <h3 class="price">Priceless</h3>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
<<<<<<< Updated upstream
  props: {
    name: String,
    image: String,
    price: Number,
  },
  components: {},
=======
  name: "Card",
>>>>>>> Stashed changes
};
</script>

<style scoped>
.card {
<<<<<<< Updated upstream
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

.container {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 0.625rem;
=======
  margin: 0;
  padding: 0;

  border: 1rem solid black;
>>>>>>> Stashed changes
}
</style>
