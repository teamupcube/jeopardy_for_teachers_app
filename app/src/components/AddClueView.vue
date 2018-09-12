<template>
  <div id="app">
      <router-link to="/board/:id/categories/:categoryId/custom-clue" v-if="user"></router-link>
      <router-link to="/board/:id/categories/:categoryId/search"></router-link>
    <RouterView addCustomClue="handleCustomClue" :historicClues="clues" :onSearch="handleSearch"></RouterView>
  </div>
</template>

<script>
import { getData, addClue } from '../services/api';

export default {
  data() {
    return {
      clues: null,
      keywords: '',
      clueNumber: null,
      previousClue: null
    };
  },
  created() {
    this.category = this.$route.params.id;
  },
  methods: {
    handleSearch(keywords) {
      this.keywords = keywords;
      this.searchData();
    },
    searchData() {
      getData(this.keywords)
        .then(clues => {
          this.clues = clues;
          return this.clues;
        });
    },
    handleCustomClue() {
      console.log('make category route', this.$route.params.boardId);
      this.clueNumber++;
      this.board = this.$route.params.boardId;
      this.category = this.$route.params.categoryId;
      return addClue(this.clue, this.answer, this.value, this.category)
        .then(saved => {
          this.previousClue = saved;
          this.clue = '';
          this.answer = '';
          this.value = null;
          console.log('prev clue', this.previousClue);
          if(this.clueNumber < 6) {
            this.$router.push(`/board/${this.board}/categories/${this.category}`);
          }
        });
    }
  }
};
</script>

<style>

</style>
