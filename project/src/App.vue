<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart ({{ this.carts.length }})</router-link>
=======
      <!--      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
>>>>>>> parent of 071eddd (push)
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
