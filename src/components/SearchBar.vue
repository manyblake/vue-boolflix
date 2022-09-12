<template>
  <header>
    <div class="container">
      <h1>Boolflix</h1>

      <div>
        <input type="text" v-model="query" />
        <input
          type="submit"
          value="Cerca"
          @keyup.enter="fetch()"
          @click="fetch()"
        />
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import state from "../store.js";

export default {
  data() {
    return {
      query: ``,
      original_movies: state.original_movies,
      original_series: state.original_series,
    };
  },

  methods: {
    fetch() {
      const api_key = `bc703ed01f56d8c42a9afde987ee066f`;
      const URI = `https://api.themoviedb.org/3/search`;
      state.query = this.query.trim();

      axios
        .get(`${URI}/movie`, {
          params: {
            api_key: api_key,
            query: state.query,
          },
        })
        .then((response) => {
          this.original_movies.push(...response.data.results);
        });

      axios
        .get(`${URI}/tv`, {
          params: {
            api_key: api_key,
            query: state.query,
          },
        })
        .then((response) => {
          this.original_series.push(...response.data.results);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: black;
  padding: 1rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
      text-transform: uppercase;
      color: red;
    }
  }
}
</style>
