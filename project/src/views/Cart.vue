<template>
  <div class="Cart">
    <listitem
      class="listitem"
      v-for="(cart, index) in carts"
      :key="index"
      :name="cart.name"
      :price="cart.price"
      :image="cart.img"
    >
      <Button @button-click="removeCard(index)">Remove</Button>
    </listitem>
    <Button v-if="false" @button-click="removeAll()">Remove All</Button>
  </div>
</template>

<script>
import listitem from "../components/listitem.vue";
import Button from "../components/button.vue";

export default {
  components: {
    listitem,
    Button,
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      haveItems: false,
    };
  },
  methods: {
    removeCard(index) {
      this.$store.commit("remove", index);
    },
    removeAll() {
      this.$store.commit("removeAll");
    },
    authState: function () {
      if (this.$store.state.cart === 0) {
        this.haveItems = false;
      } else {
        this.haveItems = true;
      }
    },
  },
};
</script>

<style scoped></style>
