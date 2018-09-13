<template>
  <div>
    <h2>Make Your Game Board</h2>
    <router-link to="/board"></router-link>
    <router-link :to="`/board/${this.board.id}`"></router-link>
    <router-link :to="`/board/${this.category.boardId}/categories/${this.category.id}/custom-clue`"></router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
