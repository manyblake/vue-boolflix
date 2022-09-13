import Vue from "vue";

const state = Vue.observable({
  query: ``,
  original_movies: [],
  original_series: [],
  flags: [`de`, `en`, `es`, `fr`, `it`, `ja`, `pt`, `zh`],
  api_key: `bc703ed01f56d8c42a9afde987ee066f`,
  URI: `https://api.themoviedb.org/3/search`,
});

export default state;
