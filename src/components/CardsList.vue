<template>
  <main class="container">
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <FilmCard :movie="movie" />
      </li>

      <li v-for="serie in series" :key="serie.id">
        <SerieCard :serie="serie" />
      </li>
    </ul>
  </main>
</template>

<script>
import FilmCard from "./FilmCard.vue";
import SerieCard from "./SerieCard.vue";
import state from "../store.js";

export default {
  components: {
    FilmCard,
    SerieCard,
  },

  computed: {
    movies() {
      return state.original_movies.map((el) => {
        const newMovie = {
          id: el.id,
          title: el.title,
          original_title: el.original_title,
          lang: el.original_language,
          overview: el.overview,
          poster: `https://image.tmdb.org/t/p/w342/${el.poster_path}`,
          vote: Math.round(el.vote_average / 2),
        };
        return newMovie;
      });
    },

    series() {
      return state.original_series.map((el) => {
        const newSerie = {
          id: el.id,
          title: el.name,
          original_title: el.original_name,
          lang: el.original_language,
          overview: el.overview,
          poster: `https://image.tmdb.org/t/p/w342/${el.poster_path}`,
          vote: Math.round(el.vote_average / 2),
        };
        return newSerie;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
main.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
  }
}
</style>
