<template>
  <div class="home">
    <div class="items">
      <Card
        v-for="vanguard in vanguards"
        :key="vanguard.name"
        :name="vanguard.name"
        :img="vanguard.img"
        :price="vanguard.price"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/card.vue";
export default {
  name: "Home",
  data() {
    return {
      vanguards: [
        {
          name: "Sealed Blaze Sword, Prithivih",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dsd06/dsd06_001.png",
          price: 90,
        },
        {
          name: "Blaze Maiden, Parama",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt02/dbt02_030.png",
          price: 160,
        },
        {
          name: "Blaze Maiden, Ximena",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt03/dbt03_012.png",
          price: 260,
        },
        {
          name: "Blaze Maiden, Toresa",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt03/dbt03_027.png",
          price: 130,
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1.25rem;
}
</style>
