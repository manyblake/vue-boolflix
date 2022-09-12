<template>
  <div id="app">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    SearchBar,
  },

  methods: {},
};
</script>

<style lang="scss">
img {
  width: 30px;
}
</style>
