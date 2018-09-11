<template>
  <div>
    <h1>Game Setup</h1>
    <RouterView :onAdd="handleAddClassName" :onAddTeam="handleAddTeam"></RouterView>
  </div>
</template>

<script>

import AddClassName from './AddClassName';
import AddTeamNames from './AddTeamNames';
import { addGame, addTeam } from '../services/api';

export default {
  components: {
    AddClassName,
    AddTeamNames
  },
  methods: {
    handleAddClassName(game) {
      return addGame(game);
    },
    handleAddTeam(team) {
      return addTeam(team);
    }
  }
};
</script>

<style>

</style>
