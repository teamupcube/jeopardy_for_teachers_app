<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <router-link to="/play">Play Game</router-link>
    <router-link to="/new">Make New Game</router-link>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>

<style>

</style>
