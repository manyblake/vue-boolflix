<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster}`" />

    <!-- <template v-if="flags.includes(serie.lang)">
      <img :src="require(`../assets/img/${serie.lang}.svg`)" />
    </template>
    <template v-else>
      <img :src="genericFlag" />
    </template> -->

    <div class="card__info">
      <h3>Titolo originale: {{ serie.original_title }}</h3>
      <h3>Titolo: {{ serie.title }}</h3>
      <p>
        Voto:
        <template v-for="i in 5">
          <template v-if="i <= serie.vote">
            <font-awesome-icon
              :key="'fs' + i"
              icon="fa-solid fa-star"
              class="full-star"
            />
          </template>
          <template v-else>
            <font-awesome-icon :key="'es' + i" icon="fa-regular fa-star" />
          </template>
        </template>
      </p>
      <p>Overview: {{ serie.overview }}</p>

      <h3>Attori:</h3>
      <p v-for="(actor, i) in actors" :key="i">
        <template v-if="i < 5">
          {{ actor.name }}
        </template>
      </p>

      <h3>Generi:</h3>
      <p v-for="(genre, i) in genres" :key="i">
        {{ genre.name }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import state from "../store.js";
import genericFlag from "../assets/img/generic.png";

export default {
  props: {
    serie: Object,
  },

  data() {
    return {
      genericFlag: genericFlag,
      flags: state.flags,
      actors: [],
      genres: [],
    };
  },

  methods: {
    fetchActors() {
      const URI = `https://api.themoviedb.org/3/tv/${this.serie.id}/credits`;
      axios
        .get(`${URI}`, {
          params: {
            api_key: state.api_key,
          },
        })
        .then((response) => {
          this.actors.push(...response.data.cast);
        });
    },

    fetchGenres() {
      const URI = `https://api.themoviedb.org/3/tv/${this.serie.id}`;
      axios
        .get(`${URI}`, {
          params: {
            api_key: state.api_key,
          },
        })
        .then((response) => {
          this.genres.push(...response.data.genres);
        });
    },
  },

  beforeMount() {
    this.fetchActors();
    this.fetchGenres();
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  &:hover {
    .card__info {
      display: block;
    }
  }
}

.card__info {
  display: none;
  position: absolute;
  background-color: black;
  color: white;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0.75rem;
  overflow: auto;
}

.full-star {
  color: yellow;
}
</style>
