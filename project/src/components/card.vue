<template>
  <div class="card">
    <h2 class="item">Mew</h2>
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
      alt="picture of mew"
    />
    <h3 class="price">Priceless</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
html,
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  border: 1rem solid black;
}
.price,
.item {
  margin: 0;
  padding: 0;
}
</style>
