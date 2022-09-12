<template>
  <body>
    <div id="app">
      <SearchBar />
      <CardsList />
    </div>
  </body>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import CardsList from "./components/CardsList.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    CardsList,
  },

  methods: {},
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

ul {
  list-style-type: none;
}

img {
  display: inline-block;
  width: 100%;
  aspect-ratio: 4/6;
}

body {
  background-color: #1b1b1b;
}
</style>
