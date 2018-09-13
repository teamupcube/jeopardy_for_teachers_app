<template>
  <div>
    <div>
      <form @submit.prevent="handleAddCategory" class="category-form">
        <div>Catergory Name: 
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
import { addCategory } from '../services/api';

export default {
  data() {
    return {
      category: '',
      categoryNumber: null,
    };
  },
  methods: {
    handleAddCategory() {
      this.categoryNumber++;
      console.log('categoryNumber', this.categoryNumber);
      this.board = this.$route.params.id;
      return addCategory(this.category, this.board)
        .then(saved => {
          console.log('saved', saved);
          this.category = saved;
          console.log('this.category', this.category.id);
          console.log(`/board/${this.category.boardId}/categories/${this.category.id}/${this.categoryNumber}/custom-clue`);
          this.$router.push(`/board/${this.category.boardId}/categories/${this.category.id}/${this.categoryNumber}/custom-clue`);
        });
    }
  }
};

</script>

<style>

</style>

