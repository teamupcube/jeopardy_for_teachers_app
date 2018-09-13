<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Select a Board</h2>
      <ul>
        <label v-if="boards" v-for="board in boards" 
          :key="board.id" 
          class="board">
          <input type="radio" :value="board.id" v-model="boardId">
          {{ board.name }}
        </label>
      </ul>
      <h2>Add Class Name</h2>
      <label>
        Class Name: 
        <input 
          type="text" 
          name="className" 
          placeholder="Class Name" 
          v-model="className" 
          required>
      </label>
      <button>Next</button>
    </form>
  </div>
</template>

<script>


import { getBoards, addGame } from '../services/api';

export default {
  props: {
    // game: Object,
    // onAdd: Function,
  },
  data() {
    return {
      className: '',
      boards: null,
      boardId: null
    };
  },
  computed: {
    isNew() {
      return this.game === undefined;
    }
  },
  // created() {
  //   const game = this.game;
  //   if(this.isNew) return;
  //   this.className = game.className;
  // },
  created() {
    getBoards()
      .then(boards => {
        this.boards = boards;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleSubmit() {
      
      const game = {
        className: this.className,
        boardId: this.boardId
      };
      return addGame(game)
        .then(saved => {
          this.game = saved;
          this.$router.push(`/game/${this.game.id}`);
        });
    }
  },
  components: {
  }
};
</script>

<style>

</style>
