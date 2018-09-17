<template>
  <div>
    <div class="category">
      <form @submit.prevent="handleAddCategory" class="category-form">
        <div>Category Name: 
          <input 
            type="text" 
            name="category" 
            placeholder="Category"
            v-model="category"
            required/>
        </div>
        <button>Submit</button>
      </form>
    </div>
    <div>
    </div>
  </div>
</template>

<script>

import { addCategory, getCategories } from '../services/api';

export default {
  data() {
    return {
      category: ''
    };
  },
  created() {
    this.board = this.$route.params.id;
    console.log(this.board);
    getCategories(this.board);
  },
  methods: {
    handleAddCategory() {
      this.board = this.$route.params.id;
      return addCategory(this.category, this.board)
        .then(saved => {
          this.category = saved;
          this.$router.push(`/board/${this.category.boardId}/categories/${this.category.id}/custom-clue`);
        });
    }
  }
};

</script>

<style>

  .category {
    margin-top: 7%;
  }

  .category button {
    margin-top: 2%;
  }

</style>

