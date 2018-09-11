<template>
  <div>
    <h1>Game Setup</h1>
    <RouterView :onAdd="handleAddClassName" :game="game" :onAddTeam="handleAddTeam"></RouterView>
  </div>
</template>

<script>

import AddClassName from './AddClassName';
import AddTeamNames from './AddTeamNames';
import { addGame, addTeam } from '../services/api';

// const initGame = () => {
//   return {
//     className: this.game.class_name ? this.game.class_name : '',
//     id: ''
//   };
// };
export default {
  components: {
    AddClassName,
    AddTeamNames
  },
  data() {
    return {
      game: null
      // game: this.game ? Object.assign({}, this.game) : initGame()
    };
  },
  methods: {
    handleAddClassName(game) {
      return addGame(game)
        .then(results => {
          this.game = results;
          console.log(this.game);
        });
    },
    handleAddTeam(team) {
      return addTeam(team);
    }
  }
};
</script>

<style>

</style>
