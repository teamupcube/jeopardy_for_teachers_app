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
  </div>
</template>

<script>

import { addBoard } from '../services/api';
export default {
  data() {
    return {
      board: ''
    };
  },
  methods: {
    handleAddBoard() {
      console.log('board', this.board);
      return addBoard(this.board)
        .then(saved => {
          this.board = saved;
          this.$router.push(`/board/${this.board.id}`);
        });
    }
  }
};

</script>

<style>

</style>
