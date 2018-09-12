<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <br>
    <router-link to="/play">Play Game</router-link>
    <router-link to="/board">Make New Game Board</router-link>
    <RouterView></RouterView>
  </div>
</template>

<script>


export default {
  props: {
    user: Object,
    handleNext: Function
  },
};
</script>

<style scoped>

</style>
