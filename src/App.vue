<template>
  <div id="app">
    <input type="text" v-model="query" />
    <input type="submit" value="Cerca" @click="fetch()" />
    <ul>
      <li v-for="(film, i) in films" :key="`f` + i">
        {{ film.original_title }}
        {{ film.title }}
        {{ film.original_language }}
        <template v-if="flags.includes(film.original_language)">
          <img :src="require(`./assets/img/${film.original_language}.png`)" />
        </template>
        <template v-else>
          <img :src="genericFlag" />
        </template>
        {{ film.vote_average }}
      </li>

      <li v-for="(serie, i) in series" :key="`s` + i">
        {{ serie.original_name }}
        {{ serie.name }}
        {{ serie.original_language }}
        <template v-if="flags.includes(serie.original_language)">
          <img :src="require(`./assets/img/${serie.original_language}.png`)" />
        </template>
        <template v-else>
          <img :src="genericFlag" />
        </template>
        {{ serie.vote_average }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import genericFlag from "./assets/img/generic.png";

export default {
  name: "App",
  components: {},

  data() {
    return {
      api_key: `bc703ed01f56d8c42a9afde987ee066f`,
      URI: `https://api.themoviedb.org/3/search`,
      query: ``,
      films: [],
      series: [],
      flags: [`de`, `en`, `es`, `fr`, `it`, `uk`],
      genericFlag: genericFlag,
    };
  },

  methods: {
    fetch() {
      axios
        .get(
          `${this.URI}/movie?api_key=${this.api_key}&language=it_IT&query=${this.query}`
        )
        .then((response) => {
          this.films.push(...response.data.results);
        });

      axios
        .get(
          `${this.URI}/tv?api_key=${this.api_key}&language=it_IT&query=${this.query}`
        )
        .then((response) => {
          this.series.push(...response.data.results);
        });
    },
  },
};
</script>

<style lang="scss">
img {
  width: 30px;
}
</style>
