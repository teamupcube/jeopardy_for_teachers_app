<template>
  <div>
    <h1>Game Setup</h1>
    <RouterView :onAdd="handleAddClassName"></RouterView>
  </div>
</template>

<script>

import AddClassName from './AddClassName';
import AddTeamNames from './AddTeamNames';
import { addGame } from '../services/api';

export default {
  components: {
    AddClassName,
    AddTeamNames
  },
  methods: {
    handleAddClassName(game) {
      return addGame(game);
    }
  }
};
</script>

<style>

</style>
