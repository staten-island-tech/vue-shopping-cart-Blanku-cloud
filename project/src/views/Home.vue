<template>
  <div class="home">
    <Card v-for="vanguard in vanguards" :key="vanguard" title:vanguard.name />
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
      ],
    };
  },
  components: {
    Card,
  },
};
</script>
