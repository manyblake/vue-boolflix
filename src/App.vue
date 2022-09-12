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

  computed: {
    // movies() {
    //   return this.original_movies.map((el) => {
    //     const newMovie = {
    //       id: el.id,
    //       title = el.tile,
    //       original_title: el.original_title,
    //       lang: original_language,
    //       // flag:
    //       overview: el.overview,
    //       poster: `https://image.tmdb.org/t/p/w342/${el.poster_path}`,
    //       // vote:
    //     }
    //     return newMovie
    //   });
    // },
  },

  methods: {
    starsCalculator(number) {
      number = Math.round(number) / 2;
      return number;
    },
  },
};
</script>

<style lang="scss">
img {
  width: 30px;
}
</style>
