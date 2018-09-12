<template>
   <form class="category-form">
      <div>Catergory Name: 
        <input class="category-text" type="text" 
          name="categoryName" placeholder="Category" required>
      </div>
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
    handleAddCategory(categoryName) {
      return addCategory(categoryName)
        .then(saved => {

        });
    }
  }
}

</script>

<style>

</style>
