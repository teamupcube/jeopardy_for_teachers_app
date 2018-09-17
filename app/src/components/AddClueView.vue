<template>
  <div id="clue-router">
      <router-link :to="`/board/${board}/categories/${category}/custom-clue`">Create Custom Clue</router-link><br/>
      <router-link :to="`/board/${board}/categories/${category}/search`">Search Jeopardy Database for a Clue</router-link><br/>
      <router-link :to="`/board/${board}/categories/${category}/your-board`">Your Board</router-link>
      <div class="last-saved-clue" v-if="previousClue">
        <p>Your previous clue, answer, and point value were saved as:</p>
        <ul>
          <li>Clue: {{ previousClue.clue }}</li>
          <li>Answer: {{ previousClue.answer }}</li>
          <li>Value: {{ previousClue.value }}</li>
        </ul>
      </div>
    <RouterView :message="message" :onAdd="handleCustomClue" :category="category" :addCustomClue="handleCustomClue" :historicClues="clues" :onSearch="handleSearch"></RouterView>
  </div>
</template>

<script>

import { getData, addClue, getCategoryNumber } from '../services/api';

export default {
  data() {
    return {
      clues: null,
      keywords: '',
      clueNumber: null,
      previousClue: null,
      categoryNumber: null,
      message: ''
    };
  },
  created() {
    this.category = this.$route.params.categoryId;
    this.board = this.$route.params.id;
    getCategoryNumber(this.board)
      .then(saved => {
        this.categoryNumber = saved.count;
        console.log('cat', this.categoryNumber);
      });
  },
  methods: {
    handleSearch(keywords) {
      this.keywords = keywords;
      console.log('handle search', this.keywords);
      this.searchData(this.keywords);
    },
    searchData() {
      getData(this.keywords)
        .then(clues => {
          console.log('return search view', clues);
          this.clues = clues;
          console.log('view clues', this.clues);
          return this.clues;
        });
    },
    handleCustomClue(clue, answer, value, view) {
      this.clueNumber++;
      console.log('clue num', this.clueNumber);
      return addClue(clue, answer, value, this.category)
        .then(saved => {
          this.previousClue = saved;
          this.clue = '';
          this.answer = '';
          this.value = null;
          if(this.clueNumber < 5 && this.categoryNumber <= 6) {
            this.$router.push(`/board/${this.board}/categories/${this.category}/${view}`);
          } 
          else if(this.clueNumber === 5 && this.categoryNumber < 6) {
            this.$router.push(`/board/${this.board}`);
          }
          else if(this.clueNumber === 5 && this.categoryNumber >= 6) {
            this.message = 'You have finished your game board!';
            this.$router.push(`/board/${this.board}/categories/${this.category}/your-board`);
          } else {
            alert('an error has occured');
          }
        });
    }
  }
};

</script>

<style>

  #clue-router {
    text-align: center;
    margin: 3%;
  }

  .last-saved-clue { 
    text-align: center;
    margin: 5%;
  }

</style>
