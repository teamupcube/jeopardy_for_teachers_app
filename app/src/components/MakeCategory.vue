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
export default {
  data() {
    return {
      categoryName: ''
    };
  },
  methods: {
    handleAddCategory() {
      console.log('category', this.category)
      return addCategory(categoryName)
        .then(saved => {
          
          
          this.$route.push('/make-game/:id/categories/:categoryId');

        });
    }
  }
}

</script>

<style>

</style>

