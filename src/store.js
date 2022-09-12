import Vue from "vue";

const state = Vue.observable({
  query: ``,
  original_movies: [],
  original_series: [],
  flags: [`de`, `en`, `es`, `fr`, `it`, `ja`, `pt`, `zh`],
});

export default state;
