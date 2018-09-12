<template>
  <div id="app">
      <router-link :to="`/board/${board}/categories/${category}/custom-clue`">Create Custom Clue</router-link><br/>
      <router-link :to="`/board/${board}/categories/${category}/search`">Search Jeopardy Database for a Clue</router-link>
      <div v-if="previousClue">
        <p>Your previous clue, answer, and point value were saved as:</p>
        <ul>
          <li>Clue: {{ previousClue.clue }}</li>
          <li>Answer: {{ previousClue.answer }}</li>
          <li>Value: {{ previousClue.value }}</li>
        </ul>
      </div>
    <RouterView :category="category" :addCustomClue="handleCustomClue" :historicClues="clues" :onSearch="handleSearch"></RouterView>
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
    this.category = this.$route.params.categoryId;
    this.board = this.$route.params.id;
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
    handleCustomClue(clue, answer, value) {
      this.clueNumber++;
      this.board = this.$route.params.boardId;
      this.category = this.$route.params.categoryId;
      console.log('make category route', this.category);
      return addClue(clue, answer, value, this.category)
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
