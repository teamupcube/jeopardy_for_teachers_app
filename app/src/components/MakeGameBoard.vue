<template>
  <div>
    <h2>Create your first Jeopardy category</h2>
    <form @submit.prevent="handleAddCategory">
      <div>Game Name: 
        <input type="text" 
          name="board" placeholder="Game Name" required>
        <button>Submit</button>
      </div>
    </form>
    <router-link to="/form">Add Category</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import CategoryForm from './CategoryForm.vue';
export default {
  components: {
    CategoryForm
  },
  methods: {
    handleAddCategory(board) {
      return addCategory(board)
        .then(saved => {

        });
    }
  }
};
</script>

<style>

</style>
