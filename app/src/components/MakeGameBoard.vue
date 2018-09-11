<template>
  <div>
    <h2>Create your game board</h2>
    <form @submit.prevent="handleAddBoard">
      <div>Game Name: 
        <input 
          type="text" 
          name="board" 
          placeholder="Game Name" 
          v-model="board" 
          required>
        <button>Submit</button>
      </div>
    </form>
    <router-link to="/form">Add Category</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import CategoryForm from './CategoryForm.vue';
import { addBoard } from '../services/api';
export default {
  data() {
    return {
      boards: null,
      board: ''
    };
  },
  components: {
    CategoryForm
  },
  methods: {
    handleAddBoard() {
      console.log('board', this.board);
      return addBoard(this.board)
        .then(saved => {
          this.board = saved;
        });
    }
  }
};
</script>

<style>

</style>
