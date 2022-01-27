<template>
  <div class="home">
    <Card
      v-for="vanguard in vanguards"
      :key="vanguard.name"
      :name="vanguard.name"
      :image="vanguard.img"
      :price="vanguard.price"
    />
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
      ],
    };
  },
  components: {
    Card,
  },
};
</script>
