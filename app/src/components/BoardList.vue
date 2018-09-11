<template>
  <ul>
    <label v-if="boards" v-for="board in boards" 
      :key="board.id" 
      class="board">
      <input type="radio" v-model="board.id">
      {{ board.name }} 
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
    };
  },
  
}


</script>

<style scoped>

</style>
