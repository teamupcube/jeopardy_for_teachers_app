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
          :name="`category${categoryNumber}-name`" placeholder="Category" required>
      </div>
    </form>
    <Search :onSearch="handleSearch"/>

  </div>

  
</template>

<script>
import Search from './Search.vue';
import api from '../services/api';

export default {
  data() {
    return {
      clues: '',
      items: '',
      search: ''
    };
  },
  components: {
    Search
  },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchData();
    },
    searchData() {
      api.getData(this.search)
        .then(response => {
          this.clues = response.items.map(clue => clue.clue);
        });
    }
  
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
