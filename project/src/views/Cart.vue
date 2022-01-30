<template>
  <div class="Cart">
    <listitem
      class="listitem"
      v-for="cart in carts"
      :key="cart"
      :name="cart.name"
      :price="cart.price"
      :image="cart.img"
    />
  </div>
</template>

<script>
import listitem from "../components/listitem.vue";
export default {
  components: {
    listitem,
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.listitem {
  display: flex;
  justify-content: space-between;
}
</style>
