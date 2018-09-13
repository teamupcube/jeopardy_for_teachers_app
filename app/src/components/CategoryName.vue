<template>
  <div>
    <div>
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
  props: {
    categoryNumber: Number,
    categoryCount: Function
  },
  data() {
    return {
      category: ''
    };
  },
  created() {
    this.board = this.$route.params.id;
    console.log(this.board)
    getCategories(this.board)
  },
  methods: {
    handleAddCategory() {
      console.log('category categoryNumber', this.categoryNumber);
      this.board = this.$route.params.id;
      // this.categoryCount(this.categoryNumber);
      return addCategory(this.category, this.board)
        .then(saved => {
          console.log('saved', saved);
          this.category = saved;
          console.log('this.category', this.category.id);
          console.log(`/board/${this.category.boardId}/categories/${this.category.id}/custom-clue`);
          this.$router.push(`/board/${this.category.boardId}/categories/${this.category.id}/custom-clue`);
        });
    }
  }
};

</script>

<style>

</style>

