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
    <Button v-if="this.carts.length > 0" @button-click="removeAll()"
      >Remove All</Button
    >
    <h2 v-if="this.carts.length === 0">Price: $0 (BUY SOMETHING PLZ)</h2>
    <h2 v-if="this.carts.length > 0">Price: ${{ price }}</h2>
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
    price() {
      return this.$store.state.cart.price;
    },
  },
  data() {
    return {};
  },
  methods: {
    removeCard(index) {
      this.$store.commit("remove", index);
    },
    removeAll() {
      this.$store.commit("removeAll");
    },
  },
};
</script>

<style scoped></style>
