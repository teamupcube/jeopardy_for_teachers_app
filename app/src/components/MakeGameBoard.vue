<template>
  <div>
    <h2>Create your first Jeopardy category</h2>
    <form>
      <div>Game Name: 
        <input type="text" 
          name="game-name" placeholder="Game Name" required>
        <button>Submit</button>
      </div>
    </form>
    <router-link to="/form">Add Category</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import CategoryForm from "./CategoryForm.vue";
export default {
  components: {
    CategoryForm
  }
};
</script>

<style>

</style>
