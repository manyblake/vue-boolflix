<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster}`" />

    <!-- <template v-if="flags.includes(movie.lang)">
      <img :src="require(`../assets/img/${movie.lang}.svg`)" />
    </template>
    <template v-else>
      <img :src="genericFlag" />
    </template> -->

    <div class="card__info">
      <h3>Titolo originale: {{ movie.original_title }}</h3>
      <h3>Titolo: {{ movie.title }}</h3>
      <p>
        Voto:
        <template v-for="i in 5">
          <template v-if="i <= movie.vote">
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
      <p>Overview: {{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import state from "../store.js";
import genericFlag from "../assets/img/generic.png";

export default {
  props: {
    movie: Object,
  },

  data() {
    return {
      genericFlag: genericFlag,
      flags: state.flags,
    };
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
