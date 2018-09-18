<template>
  <div>
    <h2>Create your game board</h2>
    <form @submit.prevent="handleSubmit">
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
// Should this component be GameName? or AddGame?
import { addBoard } from '../services/api';
export default {
  data() {
    return {
      board: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('board', this.board);
      return addBoard(this.board)
        .then(saved => {
          // no reason to do this as you are navigating away on next line
          // this.board = saved;
          this.$router.push(`/board/${saved.id}`);
        });
    }
  }
};

</script>

<style>

</style>
