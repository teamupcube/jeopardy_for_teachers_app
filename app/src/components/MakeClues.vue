<template>
  <div>

    <form @submit.prevent="handleSubmitClues" v-if="category">
      <div>100 Point Clue: 
        <input 
        type="text" 
        name="clue100" 
        placeholder="Clue"
        v-model="clue100" 
        required>
      </div>
      <div>100 Point Answer: 
        <input 
        type="text" 
        name="answer100" 
        placeholder="Answer"
        v-model="answer100" 
        required>
      </div>
      <button>Submit</button>
    </form>
    <Search :onAdd="handleAdd" :historicClues="clues" :onSearch="handleSearch"/>
  </div>

  
</template>

<script>
import Search from './Search.vue';
import { getData } from '../services/api';

export default {
  data() {
    return {
      clues: null,
      keywords: '',
    };
  },
  created() {
    this.category = this.$route.params.id;
  },
  components: {
    Search
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
    handleSubmitClues() {
      // console.log('make category route', this.$route.params.id);
      // this.board = this.$route.params.id;
      // return addCategory(this.category, this.board)
      //   .then(saved => {
      //     console.log('saved', saved);
      //     this.category = saved;
      //     this.$router.push(`/make-game/${this.category.boardId}/categories/${this.category.id}`);
      //   });
    },
    handleAdd(historicClue) {
      return addHistoricClue(historicClue)
        .then(saved => {

        });
    }
    
  }
};

</script>

<style scoped>

</style>
