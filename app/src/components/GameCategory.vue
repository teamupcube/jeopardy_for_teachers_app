<template>
  <div v-if="!category" class="column" id="cat_one">
    <div class="box">I'm here! </div>
    <GameClue v-for="clue in clues" :key="clue.id"/>
  </div>
</template>

<script>

import GameClue from './GameClue';

export default {
  props: {
    category: Object
  },
  components: {
    GameClue
  }
};
</script>

<style>

</style>
