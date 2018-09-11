<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Select a Board</h2>
      <BoardList :boards="boards"/>
      <h2>Add Class Name</h2>
      <label>
        Class Name: <input type="text" v-model="className"> 
      </label>
      <button @click="handleNext">Next</button>
    </form>
  </div>
</template>

<script>

import BoardList from './BoardList';
import { getBoards } from '../services/api'

export default {
  props: {
    game: Object,
    onAdd: Function,
  },
  data() {
    return {
      className: '',
      boards: null
    }
  },
  computed: {
    isNew() {
      return this.game === undefined;
    }
  },
  created() {
    const game = this.game;
    if(this.isNew) return;
    this.className = game.className;
  },
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
    handleNext() {
      this.$router.push('team-names');
    },
    handleSubmit() {
      const game = {
        className: this.className,
        boardId: this.board.id
      }
      return this.onAdd(game);
    }
  },
  components: {
    BoardList
  }
};
</script>

<style>

</style>
