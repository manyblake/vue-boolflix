<template>
  <header>
    <input type="text" v-model="query" />
    <input type="submit" value="Cerca" @click="fetch()" />
    <ul>
      <li v-for="film in films" :key="film.id">
        {{ film.original_title }}
        {{ film.title }}
        <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" />
        <template v-if="flags.includes(film.original_language)">
          <img :src="require(`../assets/img/${film.original_language}.svg`)" />
        </template>
        <template v-else>
          <img :src="genericFlag" />
        </template>
        {{ film.vote_average }}
      </li>

      <li v-for="serie in series" :key="serie.id">
        {{ serie.original_name }}
        {{ serie.name }}
        {{ serie.original_language }}
        <template v-if="flags.includes(serie.original_language)">
          <img :src="require(`../assets/img/${serie.original_language}.svg`)" />
        </template>
        <template v-else>
          <img :src="genericFlag" />
        </template>
        {{ serie.vote_average }}
        <!-- <template v-for="star in 5"></template> -->
      </li>
    </ul>
  </header>
</template>

<script>
import axios from "axios";
import state from "../store.js";
import genericFlag from "../assets/img/generic.png";

export default {
  data() {
    return {
      query: ``,
      films: [],
      series: [],
      flags: [`de`, `en`, `es`, `fr`, `it`, `ja`, `pt`, `zh`],
      genericFlag: genericFlag,
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
          this.films.push(...response.data.results);
          //this.films(response.data.results);
        });

      axios
        .get(`${URI}/tv`, {
          params: {
            api_key: api_key,
            query: state.query,
          },
        })
        .then((response) => {
          this.series.push(...response.data.results);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
