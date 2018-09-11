<template>
  <div>
    <form class="category-form">
      <div>Catergory Name: 
        <input class="category-text" type="text" 
          name="category-name" placeholder="Category" required>
      </div>
      <div>100 Point Clue: 
        <input class="category-text" type="text" 
          name="category-name" placeholder="Category" required>
      </div>
      <div>100 Point Answer: 
        <input class="category-text" type="text" 
          :name="`category-name`" placeholder="Category" required>
      </div>
    </form>
    <Search :clues="clues" :onSearch="handleSearch"/>

  </div>

  
</template>

<script>
import Search from './Search.vue';
import { getData } from '../services/api';

export default {
  data() {
    return {
      clues: null,
      keywords: ''
    };
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
  }
};

</script>

<style scoped>

  .category-form {
    font-family: sans-serif;
  }

  .category-text {
    width: 200px;
    height: 30px;
    font-size: .9em;
  }

</style>
