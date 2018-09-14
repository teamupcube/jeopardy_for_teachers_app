<template>
  <div id="app">
      <router-link :to="`/board/${board}/categories/${category}/custom-clue`">Create Custom Clue</router-link><br/>
      <router-link :to="`/board/${board}/categories/${category}/search`">Search Jeopardy Database for a Clue</router-link><br/>
      <router-link :to="`/board/${board}/categories/${category}/your-board`">Your Board</router-link>
      <div v-if="previousClue">
        <p>Your previous clue, answer, and point value were saved as:</p>
        <ul>
          <li>Clue: {{ previousClue.clue }}</li>
          <li>Answer: {{ previousClue.answer }}</li>
          <li>Value: {{ previousClue.value }}</li>
        </ul>
      </div>
    <RouterView :categoryNumber="categoryNumber" :onAdd="handleCustomClue" :category="category" :addCustomClue="handleCustomClue" :historicClues="clues" :onSearch="handleSearch"></RouterView>
  </div>
</template>

<script>
import { getData, addClue, categoryCount } from '../services/api';

export default {
  data() {
    return {
      clues: null,
      keywords: '',
      clueNumber: null,
      previousClue: null,
      categoryNumber: null
    };
  },
  created() {
    this.category = this.$route.params.categoryId;
    this.board = this.$route.params.id;
    console.log('board', this.board);
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
    handleCustomClue(clue, answer, value, view) {
      console.log('handleClue clueNumber', this.clueNumber);
      console.log('handleClue categoryNumber', this.category);
      return addClue(clue, answer, value, this.category)
        .then(saved => {
          this.clueNumber++;
          this.previousClue = saved;
          this.clue = '';
          this.answer = '';
          this.value = null;
          this.categoryNumber = 0;
          console.log('prev clue', this.previousClue);
          if(this.categoryNumber >= 6) {
            return categoryCount(0);
            alert('error');
          }
          console.log('add clueNumber', this.clueNumber);
          console.log('add categoryNumber', this.category);
        });
    },
    handleAdd(clue, answer, value) {
      console.log('view', clue, answer, value);
      
    }
  }
};
</script>

<style>

</style>
