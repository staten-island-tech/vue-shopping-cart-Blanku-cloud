<template>
  <div class="home">
<<<<<<< Updated upstream
    <Card
      v-for="(vanguard, index) in vanguards"
      :key="index"
      :name="vanguard.name"
      :image="vanguard.img"
      :price="vanguard.price"
      class="card"
      ><Button @button-click="addCard(vanguard)">ADD TO CART</Button></Card
    >
=======
    <Card></Card>
>>>>>>> Stashed changes
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/card.vue";
<<<<<<< Updated upstream
import Button from "../components/button.vue";

=======
>>>>>>> Stashed changes
export default {
  name: "Home",
  components: {
    Card,
<<<<<<< Updated upstream
    Button,
  },
  methods: {
    addCard(vanguard) {
      this.$store.commit("add", vanguard);
      vanguard.name, vanguard.img, vanguard.price;
    },
  },
  computed: {},

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
          name: "Spurring Maiden, Ellenia",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt01/dbt01_024.png",
          price: 130,
        },
        {
          name: "Blaze Maiden, Reiyu",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dsd01/dsd01_002.png",
          price: 130,
        },
        {
          name: "Freeze Breeze",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt02/dbt02_034.png",
          price: 130,
        },
        {
          name: "Blaze Maiden, Mirin",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss01/dss01_005.png",
          price: 130,
        },
        {
          name: "Steam Artist, Pithana",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt01/dbt01_072.png",
          price: 130,
        },
        {
          name: "Upward Acrobat, Marjorie",
          img: "https://s3-ap-northeast-1.amazonaws.com/en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt01/dbt01_014.png",
          price: 130,
        },
      ],
    };
=======
>>>>>>> Stashed changes
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1.25rem;
}

.card {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
