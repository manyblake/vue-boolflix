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
    };
  },

  methods: {
    fetch() {
      state.query = this.query.trim();

      axios
        .get(`${state.URI}/movie`, {
          params: {
            api_key: state.api_key,
            query: state.query,
          },
        })
        .then((response) => {
          state.original_movies.push(...response.data.results);
        });

      axios
        .get(`${state.URI}/tv`, {
          params: {
            api_key: state.api_key,
            query: state.query,
          },
        })
        .then((response) => {
          state.original_series.push(...response.data.results);
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
