<template>
  <header>
    <input type="text" v-model="query" />
    <input type="submit" value="Cerca" @click="fetch()" />
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.original_title }}
        {{ movie.title }}
        <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster}`" />
        <template v-if="flags.includes(movie.lang)">
          <img :src="require(`../assets/img/${movie.lang}.svg`)" />
        </template>
        <template v-else>
          <img :src="genericFlag" />
        </template>
        {{ movie.vote }}

        <template v-for="i in 5">
          <template v-if="i <= movie.vote">
            <font-awesome-icon :key="'fs' + i" icon="fa-solid fa-star" />
          </template>
          <template v-else>
            <font-awesome-icon :key="'es' + i" icon="fa-regular fa-star" />
          </template>
        </template>
      </li>

      <li v-for="serie in series" :key="serie.id">
        {{ serie.original_title }}
        {{ serie.title }}
        {{ serie.lang }}
        <template v-if="flags.includes(serie.lang)">
          <img :src="require(`../assets/img/${serie.lang}.svg`)" />
        </template>
        <template v-else>
          <img :src="genericFlag" />
        </template>
        {{ serie.vote }}

        <template v-for="i in 5">
          <template v-if="i <= serie.vote">
            <font-awesome-icon :key="'fs' + i" icon="fa-solid fa-star" />
          </template>
          <template v-else>
            <font-awesome-icon :key="'es' + i" icon="fa-regular fa-star" />
          </template>
        </template>
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
      original_movies: [],
      original_series: [],
      flags: [`de`, `en`, `es`, `fr`, `it`, `ja`, `pt`, `zh`],
      genericFlag: genericFlag,
    };
  },

  computed: {
    movies() {
      return this.original_movies.map((el) => {
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
      return this.original_series.map((el) => {
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

<style lang="scss" scoped></style>
