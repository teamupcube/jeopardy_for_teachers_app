<template>
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
</template>

<script>
import { addCategory } from '../services/api';

export default {
  data() {
    return {
      category: ''
    };
  },
  methods: {
    handleAddCategory() {
      console.log('make category route', this.$route.params.id);
      this.board = this.$route.params.id;
      return addCategory(this.category, this.board)
        .then(saved => {
          console.log('saved', saved);
          this.category = saved;
          this.$router.push(`/board/${this.category.boardId}/categories/${this.category.id}`);
        });
    }
  }
};

</script>

<style>

</style>

