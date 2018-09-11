<template>
  <ul>
    <label v-if="boards" v-for="board in boards" 
      :key="board.id" 
      class="board" @click="handleClick">
      <input type="radio" :value="board.id" v-model="boardId">
      {{ board.name }}
      {{ board.id }} 
    </label>
  </ul>
</template>

<script>


export default {
  props: {
    boards: Array
  },
  data() {
    return {
      boardId: null
    }
  },
  methods: {
    handleClick() {
      console.log(this.boardId)
      // boardId = this.board.id
    }
  } 
}


</script>

<style scoped>
.board:hover {
  background-color: lightblue;
}

</style>
