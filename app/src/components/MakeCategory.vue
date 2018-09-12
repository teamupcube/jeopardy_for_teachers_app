<template>
  <form @submit.prevent="handleAddCategory" class="category-form">
    <div>Catergory Name: 
      <input class="category-text" type="text" 
        name="categoryName" placeholder="Category" required>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
import { addCategory } from '../services/api';

export default {
  data() {
    return {
      categoryName: ''
    };
  },
  methods: {
    handleAddCategory() {
      console.log('category', this.category);
      return addCategory(this.category)
        .then(saved => {
          this.category = saved;
          this.$route.push(`/make-game/:id/categories/:categoryId`);
        });
    }
  }
};

</script>

<style>

</style>

