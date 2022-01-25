<template>
  <div class="card">
    <h2 class="item-name">Mew</h2>
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
      alt="mew picture"
      class="item-img"
    />
    <h3 class="item-price">Priceless</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  border: 1rem solid black;
  width: fit-content;
}
.item-img {
  position: none;
}
.item-name,
.item-price {
  width: fit-content;
  margin: 0;
}
</style>
