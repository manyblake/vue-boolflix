<template>
  <div id="app">
    <input type="text" v-model="query" />
    <input type="submit" value="Cerca" @click="fetchMovie" />
    <ul>
      <li v-for="(film, i) in films" :key="i">
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
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// import germany from "./assets/img/de.png";
// import spain from "./assets/img/es.png";
// import france from "./assets/img/fr.png";
// import italy from "./assets/img/it.png";
// import unitedKingdom from "./assets/img/uk.png";
// import unitedStates from "./assets/img/us.png";
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
      flags: [`de`, `en`, `es`, `fr`, `it`, `uk`],
      genericFlag: genericFlag,
      // germany: germany,
      // spain: spain,
      // france: france,
      // italy: italy,
      // unitedKingdom: unitedKingdom,
      // unitedStates: unitedStates,
      // genericFlag: genericFlag,
    };
  },

  methods: {
    fetchMovie() {
      axios
        .get(
          `${this.URI}/movie?api_key=${this.api_key}&language=it_IT&query=${this.query}`
        )
        .then((response) => {
          this.films.push(...response.data.results);
        });
    },
  },
};
</script>

<style lang="scss"></style>
