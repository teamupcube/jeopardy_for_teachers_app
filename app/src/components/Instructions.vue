<template>
  <div>
    <h1>Instructions</h1>
    <router-link :to="`/game/${this.gameId}/gameplay`">Next</router-link>
  </div>
</template>

<script>
export default {
  created() {
    this.gameId = this.$route.params.id
  }
};
</script>

<style>

</style>
